import { format, addMinutes } from "date-fns";
import prisma from "../../../shared/prisma";
import { Prisma, Schedule } from "../../../../prisma/generated/prisma";
import { IPaginationOptions } from "../../interfaces/pagination";
import { paginationHelpers } from "../../../helpers/paginationHelpers";

const inserIntoDB = async (payload: any): Promise<Schedule[]> => {
  const { startDate, endDate, startTime, endTime } = payload;

  const interverlTime = 30;

  const schedules = [];

  const currentDate = new Date(startDate); // start date
  const lastDate = new Date(endDate); // end date

  while (currentDate <= lastDate) {
    const startDateTime = new Date(
      `${format(currentDate, "yyyy-MM-dd")}T${startTime}`,
    );
    const endDateTime = new Date(
      `${format(currentDate, "yyyy-MM-dd")}T${endTime}`,
    );
    while (startDateTime < endDateTime) {
      const scheduleData = {
        startDateTime: startDateTime,
        endDateTime: addMinutes(startDateTime, interverlTime),
      };
      const existingSchedule = await prisma.schedule.findFirst({
        where: {
          startDateTime: scheduleData.startDateTime,
          endDateTime: scheduleData.endDateTime,
        },
      });
      if (!existingSchedule) {
        const result = await prisma.schedule.create({
          data: scheduleData,
        });
        schedules.push(result);
      }
      startDateTime.setMinutes(startDateTime.getMinutes() + interverlTime);
    }
    currentDate.setDate(currentDate.getDate() + 1); // move to the next day
  }
  return schedules;
};

const getAllFromDB = async (
  filters: any,
  options: IPaginationOptions,
) => {
  const { limit, page, skip } = paginationHelpers.calculatePagination(options);
  const { searchTerm, ...filterData } = filters;

  const andConditions = [];


  if (Object.keys(filterData).length > 0) {
    andConditions.push({
      AND: Object.keys(filterData).map(key => {
        return {
          [key]: {
            equals: (filterData)[key],
          },
        };
      }),
    });
  }
  const whereConditions: Prisma.ScheduleWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  const result = await prisma.schedule.findMany({
    where: whereConditions,
    skip,
    take: limit,
    orderBy:
      options.sortBy && options.sortOrder
        ? { [options.sortBy]: options.sortOrder }
        : {
          createdAt: 'desc',
        },
  });
  const total = await prisma.schedule.count({
    where: whereConditions,
  });

  return {
    meta: {
      total,
      page,
      limit,
    },
    data: result,
  };
};


export const ScheduleService = {
  inserIntoDB,getAllFromDB
};
