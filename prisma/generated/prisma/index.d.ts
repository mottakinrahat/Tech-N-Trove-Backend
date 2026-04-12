
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Doctor
 * 
 */
export type Doctor = $Result.DefaultSelection<Prisma.$DoctorPayload>
/**
 * Model Patient
 * 
 */
export type Patient = $Result.DefaultSelection<Prisma.$PatientPayload>
/**
 * Model Specialties
 * 
 */
export type Specialties = $Result.DefaultSelection<Prisma.$SpecialtiesPayload>
/**
 * Model doctorSpecialties
 * 
 */
export type doctorSpecialties = $Result.DefaultSelection<Prisma.$doctorSpecialtiesPayload>
/**
 * Model PatientHealthData
 * 
 */
export type PatientHealthData = $Result.DefaultSelection<Prisma.$PatientHealthDataPayload>
/**
 * Model MedicalReport
 * 
 */
export type MedicalReport = $Result.DefaultSelection<Prisma.$MedicalReportPayload>
/**
 * Model Schedule
 * 
 */
export type Schedule = $Result.DefaultSelection<Prisma.$SchedulePayload>
/**
 * Model DoctorSchedules
 * 
 */
export type DoctorSchedules = $Result.DefaultSelection<Prisma.$DoctorSchedulesPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  SUPER_ADMIN: 'SUPER_ADMIN',
  DOCTOR: 'DOCTOR',
  NURSE: 'NURSE',
  RECEPTIONIST: 'RECEPTIONIST',
  PATIENT: 'PATIENT'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const UserStatus: {
  ACTIVE: 'ACTIVE',
  BLOCKED: 'BLOCKED',
  DELETED: 'DELETED'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]


export const BloodGroup: {
  A_POSITIVE: 'A_POSITIVE',
  B_POSITIVE: 'B_POSITIVE',
  O_POSITIVE: 'O_POSITIVE',
  AB_POSITIVE: 'AB_POSITIVE',
  A_NEGATIVE: 'A_NEGATIVE',
  B_NEGATIVE: 'B_NEGATIVE',
  O_NEGATIVE: 'O_NEGATIVE',
  AB_NEGATIVE: 'AB_NEGATIVE'
};

export type BloodGroup = (typeof BloodGroup)[keyof typeof BloodGroup]


export const MaritalStatus: {
  MARRIED: 'MARRIED',
  UNMARRIED: 'UNMARRIED'
};

export type MaritalStatus = (typeof MaritalStatus)[keyof typeof MaritalStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

export type BloodGroup = $Enums.BloodGroup

export const BloodGroup: typeof $Enums.BloodGroup

export type MaritalStatus = $Enums.MaritalStatus

export const MaritalStatus: typeof $Enums.MaritalStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.doctor`: Exposes CRUD operations for the **Doctor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Doctors
    * const doctors = await prisma.doctor.findMany()
    * ```
    */
  get doctor(): Prisma.DoctorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.patient`: Exposes CRUD operations for the **Patient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patients
    * const patients = await prisma.patient.findMany()
    * ```
    */
  get patient(): Prisma.PatientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.specialties`: Exposes CRUD operations for the **Specialties** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Specialties
    * const specialties = await prisma.specialties.findMany()
    * ```
    */
  get specialties(): Prisma.SpecialtiesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.doctorSpecialties`: Exposes CRUD operations for the **doctorSpecialties** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DoctorSpecialties
    * const doctorSpecialties = await prisma.doctorSpecialties.findMany()
    * ```
    */
  get doctorSpecialties(): Prisma.doctorSpecialtiesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.patientHealthData`: Exposes CRUD operations for the **PatientHealthData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PatientHealthData
    * const patientHealthData = await prisma.patientHealthData.findMany()
    * ```
    */
  get patientHealthData(): Prisma.PatientHealthDataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medicalReport`: Exposes CRUD operations for the **MedicalReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MedicalReports
    * const medicalReports = await prisma.medicalReport.findMany()
    * ```
    */
  get medicalReport(): Prisma.MedicalReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.schedule`: Exposes CRUD operations for the **Schedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schedules
    * const schedules = await prisma.schedule.findMany()
    * ```
    */
  get schedule(): Prisma.ScheduleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.doctorSchedules`: Exposes CRUD operations for the **DoctorSchedules** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DoctorSchedules
    * const doctorSchedules = await prisma.doctorSchedules.findMany()
    * ```
    */
  get doctorSchedules(): Prisma.DoctorSchedulesDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Admin: 'Admin',
    Doctor: 'Doctor',
    Patient: 'Patient',
    Specialties: 'Specialties',
    doctorSpecialties: 'doctorSpecialties',
    PatientHealthData: 'PatientHealthData',
    MedicalReport: 'MedicalReport',
    Schedule: 'Schedule',
    DoctorSchedules: 'DoctorSchedules'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "admin" | "doctor" | "patient" | "specialties" | "doctorSpecialties" | "patientHealthData" | "medicalReport" | "schedule" | "doctorSchedules"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Doctor: {
        payload: Prisma.$DoctorPayload<ExtArgs>
        fields: Prisma.DoctorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoctorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoctorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          findFirst: {
            args: Prisma.DoctorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoctorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          findMany: {
            args: Prisma.DoctorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>[]
          }
          create: {
            args: Prisma.DoctorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          createMany: {
            args: Prisma.DoctorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DoctorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>[]
          }
          delete: {
            args: Prisma.DoctorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          update: {
            args: Prisma.DoctorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          deleteMany: {
            args: Prisma.DoctorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DoctorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DoctorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>[]
          }
          upsert: {
            args: Prisma.DoctorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          aggregate: {
            args: Prisma.DoctorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoctor>
          }
          groupBy: {
            args: Prisma.DoctorGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoctorGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoctorCountArgs<ExtArgs>
            result: $Utils.Optional<DoctorCountAggregateOutputType> | number
          }
        }
      }
      Patient: {
        payload: Prisma.$PatientPayload<ExtArgs>
        fields: Prisma.PatientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findFirst: {
            args: Prisma.PatientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findMany: {
            args: Prisma.PatientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          create: {
            args: Prisma.PatientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          createMany: {
            args: Prisma.PatientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          delete: {
            args: Prisma.PatientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          update: {
            args: Prisma.PatientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          deleteMany: {
            args: Prisma.PatientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PatientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          upsert: {
            args: Prisma.PatientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          aggregate: {
            args: Prisma.PatientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatient>
          }
          groupBy: {
            args: Prisma.PatientGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatientCountArgs<ExtArgs>
            result: $Utils.Optional<PatientCountAggregateOutputType> | number
          }
        }
      }
      Specialties: {
        payload: Prisma.$SpecialtiesPayload<ExtArgs>
        fields: Prisma.SpecialtiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpecialtiesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialtiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpecialtiesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialtiesPayload>
          }
          findFirst: {
            args: Prisma.SpecialtiesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialtiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpecialtiesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialtiesPayload>
          }
          findMany: {
            args: Prisma.SpecialtiesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialtiesPayload>[]
          }
          create: {
            args: Prisma.SpecialtiesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialtiesPayload>
          }
          createMany: {
            args: Prisma.SpecialtiesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SpecialtiesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialtiesPayload>[]
          }
          delete: {
            args: Prisma.SpecialtiesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialtiesPayload>
          }
          update: {
            args: Prisma.SpecialtiesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialtiesPayload>
          }
          deleteMany: {
            args: Prisma.SpecialtiesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpecialtiesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SpecialtiesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialtiesPayload>[]
          }
          upsert: {
            args: Prisma.SpecialtiesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialtiesPayload>
          }
          aggregate: {
            args: Prisma.SpecialtiesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpecialties>
          }
          groupBy: {
            args: Prisma.SpecialtiesGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpecialtiesGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpecialtiesCountArgs<ExtArgs>
            result: $Utils.Optional<SpecialtiesCountAggregateOutputType> | number
          }
        }
      }
      doctorSpecialties: {
        payload: Prisma.$doctorSpecialtiesPayload<ExtArgs>
        fields: Prisma.doctorSpecialtiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.doctorSpecialtiesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorSpecialtiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.doctorSpecialtiesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorSpecialtiesPayload>
          }
          findFirst: {
            args: Prisma.doctorSpecialtiesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorSpecialtiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.doctorSpecialtiesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorSpecialtiesPayload>
          }
          findMany: {
            args: Prisma.doctorSpecialtiesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorSpecialtiesPayload>[]
          }
          create: {
            args: Prisma.doctorSpecialtiesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorSpecialtiesPayload>
          }
          createMany: {
            args: Prisma.doctorSpecialtiesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.doctorSpecialtiesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorSpecialtiesPayload>[]
          }
          delete: {
            args: Prisma.doctorSpecialtiesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorSpecialtiesPayload>
          }
          update: {
            args: Prisma.doctorSpecialtiesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorSpecialtiesPayload>
          }
          deleteMany: {
            args: Prisma.doctorSpecialtiesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.doctorSpecialtiesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.doctorSpecialtiesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorSpecialtiesPayload>[]
          }
          upsert: {
            args: Prisma.doctorSpecialtiesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorSpecialtiesPayload>
          }
          aggregate: {
            args: Prisma.DoctorSpecialtiesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoctorSpecialties>
          }
          groupBy: {
            args: Prisma.doctorSpecialtiesGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoctorSpecialtiesGroupByOutputType>[]
          }
          count: {
            args: Prisma.doctorSpecialtiesCountArgs<ExtArgs>
            result: $Utils.Optional<DoctorSpecialtiesCountAggregateOutputType> | number
          }
        }
      }
      PatientHealthData: {
        payload: Prisma.$PatientHealthDataPayload<ExtArgs>
        fields: Prisma.PatientHealthDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientHealthDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientHealthDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientHealthDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientHealthDataPayload>
          }
          findFirst: {
            args: Prisma.PatientHealthDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientHealthDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientHealthDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientHealthDataPayload>
          }
          findMany: {
            args: Prisma.PatientHealthDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientHealthDataPayload>[]
          }
          create: {
            args: Prisma.PatientHealthDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientHealthDataPayload>
          }
          createMany: {
            args: Prisma.PatientHealthDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatientHealthDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientHealthDataPayload>[]
          }
          delete: {
            args: Prisma.PatientHealthDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientHealthDataPayload>
          }
          update: {
            args: Prisma.PatientHealthDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientHealthDataPayload>
          }
          deleteMany: {
            args: Prisma.PatientHealthDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatientHealthDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PatientHealthDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientHealthDataPayload>[]
          }
          upsert: {
            args: Prisma.PatientHealthDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientHealthDataPayload>
          }
          aggregate: {
            args: Prisma.PatientHealthDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatientHealthData>
          }
          groupBy: {
            args: Prisma.PatientHealthDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientHealthDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatientHealthDataCountArgs<ExtArgs>
            result: $Utils.Optional<PatientHealthDataCountAggregateOutputType> | number
          }
        }
      }
      MedicalReport: {
        payload: Prisma.$MedicalReportPayload<ExtArgs>
        fields: Prisma.MedicalReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicalReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicalReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalReportPayload>
          }
          findFirst: {
            args: Prisma.MedicalReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicalReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalReportPayload>
          }
          findMany: {
            args: Prisma.MedicalReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalReportPayload>[]
          }
          create: {
            args: Prisma.MedicalReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalReportPayload>
          }
          createMany: {
            args: Prisma.MedicalReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedicalReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalReportPayload>[]
          }
          delete: {
            args: Prisma.MedicalReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalReportPayload>
          }
          update: {
            args: Prisma.MedicalReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalReportPayload>
          }
          deleteMany: {
            args: Prisma.MedicalReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicalReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MedicalReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalReportPayload>[]
          }
          upsert: {
            args: Prisma.MedicalReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalReportPayload>
          }
          aggregate: {
            args: Prisma.MedicalReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedicalReport>
          }
          groupBy: {
            args: Prisma.MedicalReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicalReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicalReportCountArgs<ExtArgs>
            result: $Utils.Optional<MedicalReportCountAggregateOutputType> | number
          }
        }
      }
      Schedule: {
        payload: Prisma.$SchedulePayload<ExtArgs>
        fields: Prisma.ScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          findFirst: {
            args: Prisma.ScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          findMany: {
            args: Prisma.ScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          create: {
            args: Prisma.ScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          createMany: {
            args: Prisma.ScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScheduleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          delete: {
            args: Prisma.ScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          update: {
            args: Prisma.ScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          deleteMany: {
            args: Prisma.ScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScheduleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          upsert: {
            args: Prisma.ScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          aggregate: {
            args: Prisma.ScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchedule>
          }
          groupBy: {
            args: Prisma.ScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<ScheduleCountAggregateOutputType> | number
          }
        }
      }
      DoctorSchedules: {
        payload: Prisma.$DoctorSchedulesPayload<ExtArgs>
        fields: Prisma.DoctorSchedulesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoctorSchedulesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSchedulesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoctorSchedulesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSchedulesPayload>
          }
          findFirst: {
            args: Prisma.DoctorSchedulesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSchedulesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoctorSchedulesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSchedulesPayload>
          }
          findMany: {
            args: Prisma.DoctorSchedulesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSchedulesPayload>[]
          }
          create: {
            args: Prisma.DoctorSchedulesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSchedulesPayload>
          }
          createMany: {
            args: Prisma.DoctorSchedulesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DoctorSchedulesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSchedulesPayload>[]
          }
          delete: {
            args: Prisma.DoctorSchedulesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSchedulesPayload>
          }
          update: {
            args: Prisma.DoctorSchedulesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSchedulesPayload>
          }
          deleteMany: {
            args: Prisma.DoctorSchedulesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DoctorSchedulesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DoctorSchedulesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSchedulesPayload>[]
          }
          upsert: {
            args: Prisma.DoctorSchedulesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSchedulesPayload>
          }
          aggregate: {
            args: Prisma.DoctorSchedulesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoctorSchedules>
          }
          groupBy: {
            args: Prisma.DoctorSchedulesGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoctorSchedulesGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoctorSchedulesCountArgs<ExtArgs>
            result: $Utils.Optional<DoctorSchedulesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    admin?: AdminOmit
    doctor?: DoctorOmit
    patient?: PatientOmit
    specialties?: SpecialtiesOmit
    doctorSpecialties?: doctorSpecialtiesOmit
    patientHealthData?: PatientHealthDataOmit
    medicalReport?: MedicalReportOmit
    schedule?: ScheduleOmit
    doctorSchedules?: DoctorSchedulesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type DoctorCountOutputType
   */

  export type DoctorCountOutputType = {
    doctorSpecialties: number
    doctorSchedules: number
  }

  export type DoctorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctorSpecialties?: boolean | DoctorCountOutputTypeCountDoctorSpecialtiesArgs
    doctorSchedules?: boolean | DoctorCountOutputTypeCountDoctorSchedulesArgs
  }

  // Custom InputTypes
  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorCountOutputType
     */
    select?: DoctorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeCountDoctorSpecialtiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: doctorSpecialtiesWhereInput
  }

  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeCountDoctorSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorSchedulesWhereInput
  }


  /**
   * Count Type PatientCountOutputType
   */

  export type PatientCountOutputType = {
    medicalReports: number
  }

  export type PatientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicalReports?: boolean | PatientCountOutputTypeCountMedicalReportsArgs
  }

  // Custom InputTypes
  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientCountOutputType
     */
    select?: PatientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountMedicalReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicalReportWhereInput
  }


  /**
   * Count Type SpecialtiesCountOutputType
   */

  export type SpecialtiesCountOutputType = {
    doctorSpecialties: number
  }

  export type SpecialtiesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctorSpecialties?: boolean | SpecialtiesCountOutputTypeCountDoctorSpecialtiesArgs
  }

  // Custom InputTypes
  /**
   * SpecialtiesCountOutputType without action
   */
  export type SpecialtiesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialtiesCountOutputType
     */
    select?: SpecialtiesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SpecialtiesCountOutputType without action
   */
  export type SpecialtiesCountOutputTypeCountDoctorSpecialtiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: doctorSpecialtiesWhereInput
  }


  /**
   * Count Type ScheduleCountOutputType
   */

  export type ScheduleCountOutputType = {
    doctorSchedules: number
  }

  export type ScheduleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctorSchedules?: boolean | ScheduleCountOutputTypeCountDoctorSchedulesArgs
  }

  // Custom InputTypes
  /**
   * ScheduleCountOutputType without action
   */
  export type ScheduleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleCountOutputType
     */
    select?: ScheduleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ScheduleCountOutputType without action
   */
  export type ScheduleCountOutputTypeCountDoctorSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorSchedulesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
    needPasswordChange: boolean | null
    status: $Enums.UserStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
    needPasswordChange: boolean | null
    status: $Enums.UserStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    role: number
    needPasswordChange: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    needPasswordChange?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    needPasswordChange?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    needPasswordChange?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    role: $Enums.UserRole
    needPasswordChange: boolean
    status: $Enums.UserStatus
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    needPasswordChange?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    admin?: boolean | User$adminArgs<ExtArgs>
    doctor?: boolean | User$doctorArgs<ExtArgs>
    patient?: boolean | User$patientArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    needPasswordChange?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    needPasswordChange?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    needPasswordChange?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "role" | "needPasswordChange" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | User$adminArgs<ExtArgs>
    doctor?: boolean | User$doctorArgs<ExtArgs>
    patient?: boolean | User$patientArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      admin: Prisma.$AdminPayload<ExtArgs> | null
      doctor: Prisma.$DoctorPayload<ExtArgs> | null
      patient: Prisma.$PatientPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      role: $Enums.UserRole
      needPasswordChange: boolean
      status: $Enums.UserStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends User$adminArgs<ExtArgs> = {}>(args?: Subset<T, User$adminArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    doctor<T extends User$doctorArgs<ExtArgs> = {}>(args?: Subset<T, User$doctorArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    patient<T extends User$patientArgs<ExtArgs> = {}>(args?: Subset<T, User$patientArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly needPasswordChange: FieldRef<"User", 'Boolean'>
    readonly status: FieldRef<"User", 'UserStatus'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.admin
   */
  export type User$adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
  }

  /**
   * User.doctor
   */
  export type User$doctorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    where?: DoctorWhereInput
  }

  /**
   * User.patient
   */
  export type User$patientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    where?: PatientWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    name: string | null
    profilePhoto: string | null
    contactNumber: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    name: string | null
    profilePhoto: string | null
    contactNumber: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    name: number
    profilePhoto: number
    contactNumber: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    email: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    name?: true
    profilePhoto?: true
    contactNumber?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    email?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    name?: true
    profilePhoto?: true
    contactNumber?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    email?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    name?: true
    profilePhoto?: true
    contactNumber?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    name: string
    profilePhoto: string | null
    contactNumber: string
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    email: string
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    profilePhoto?: boolean
    contactNumber?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    profilePhoto?: boolean
    contactNumber?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    profilePhoto?: boolean
    contactNumber?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    name?: boolean
    profilePhoto?: boolean
    contactNumber?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "profilePhoto" | "contactNumber" | "isDeleted" | "createdAt" | "updatedAt" | "email", ExtArgs["result"]["admin"]>
  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AdminIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AdminIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      profilePhoto: string | null
      contactNumber: string
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
      email: string
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'String'>
    readonly name: FieldRef<"Admin", 'String'>
    readonly profilePhoto: FieldRef<"Admin", 'String'>
    readonly contactNumber: FieldRef<"Admin", 'String'>
    readonly isDeleted: FieldRef<"Admin", 'Boolean'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
    readonly updatedAt: FieldRef<"Admin", 'DateTime'>
    readonly email: FieldRef<"Admin", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin updateManyAndReturn
   */
  export type AdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
  }


  /**
   * Model Doctor
   */

  export type AggregateDoctor = {
    _count: DoctorCountAggregateOutputType | null
    _avg: DoctorAvgAggregateOutputType | null
    _sum: DoctorSumAggregateOutputType | null
    _min: DoctorMinAggregateOutputType | null
    _max: DoctorMaxAggregateOutputType | null
  }

  export type DoctorAvgAggregateOutputType = {
    experience: number | null
    appointmentFee: number | null
  }

  export type DoctorSumAggregateOutputType = {
    experience: number | null
    appointmentFee: number | null
  }

  export type DoctorMinAggregateOutputType = {
    id: string | null
    name: string | null
    profilePhoto: string | null
    contactNumber: string | null
    address: string | null
    registrationNumber: string | null
    experience: number | null
    gender: $Enums.Gender | null
    appointmentFee: number | null
    qualification: string | null
    currentWorkPlace: string | null
    designation: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
  }

  export type DoctorMaxAggregateOutputType = {
    id: string | null
    name: string | null
    profilePhoto: string | null
    contactNumber: string | null
    address: string | null
    registrationNumber: string | null
    experience: number | null
    gender: $Enums.Gender | null
    appointmentFee: number | null
    qualification: string | null
    currentWorkPlace: string | null
    designation: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
  }

  export type DoctorCountAggregateOutputType = {
    id: number
    name: number
    profilePhoto: number
    contactNumber: number
    address: number
    registrationNumber: number
    experience: number
    gender: number
    appointmentFee: number
    qualification: number
    currentWorkPlace: number
    designation: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    email: number
    _all: number
  }


  export type DoctorAvgAggregateInputType = {
    experience?: true
    appointmentFee?: true
  }

  export type DoctorSumAggregateInputType = {
    experience?: true
    appointmentFee?: true
  }

  export type DoctorMinAggregateInputType = {
    id?: true
    name?: true
    profilePhoto?: true
    contactNumber?: true
    address?: true
    registrationNumber?: true
    experience?: true
    gender?: true
    appointmentFee?: true
    qualification?: true
    currentWorkPlace?: true
    designation?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    email?: true
  }

  export type DoctorMaxAggregateInputType = {
    id?: true
    name?: true
    profilePhoto?: true
    contactNumber?: true
    address?: true
    registrationNumber?: true
    experience?: true
    gender?: true
    appointmentFee?: true
    qualification?: true
    currentWorkPlace?: true
    designation?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    email?: true
  }

  export type DoctorCountAggregateInputType = {
    id?: true
    name?: true
    profilePhoto?: true
    contactNumber?: true
    address?: true
    registrationNumber?: true
    experience?: true
    gender?: true
    appointmentFee?: true
    qualification?: true
    currentWorkPlace?: true
    designation?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    _all?: true
  }

  export type DoctorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doctor to aggregate.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Doctors
    **/
    _count?: true | DoctorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DoctorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DoctorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorMaxAggregateInputType
  }

  export type GetDoctorAggregateType<T extends DoctorAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctor[P]>
      : GetScalarType<T[P], AggregateDoctor[P]>
  }




  export type DoctorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorWhereInput
    orderBy?: DoctorOrderByWithAggregationInput | DoctorOrderByWithAggregationInput[]
    by: DoctorScalarFieldEnum[] | DoctorScalarFieldEnum
    having?: DoctorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorCountAggregateInputType | true
    _avg?: DoctorAvgAggregateInputType
    _sum?: DoctorSumAggregateInputType
    _min?: DoctorMinAggregateInputType
    _max?: DoctorMaxAggregateInputType
  }

  export type DoctorGroupByOutputType = {
    id: string
    name: string
    profilePhoto: string | null
    contactNumber: string
    address: string | null
    registrationNumber: string
    experience: number
    gender: $Enums.Gender
    appointmentFee: number
    qualification: string
    currentWorkPlace: string
    designation: string
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    email: string
    _count: DoctorCountAggregateOutputType | null
    _avg: DoctorAvgAggregateOutputType | null
    _sum: DoctorSumAggregateOutputType | null
    _min: DoctorMinAggregateOutputType | null
    _max: DoctorMaxAggregateOutputType | null
  }

  type GetDoctorGroupByPayload<T extends DoctorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoctorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorGroupByOutputType[P]>
        }
      >
    >


  export type DoctorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    profilePhoto?: boolean
    contactNumber?: boolean
    address?: boolean
    registrationNumber?: boolean
    experience?: boolean
    gender?: boolean
    appointmentFee?: boolean
    qualification?: boolean
    currentWorkPlace?: boolean
    designation?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    doctorSpecialties?: boolean | Doctor$doctorSpecialtiesArgs<ExtArgs>
    doctorSchedules?: boolean | Doctor$doctorSchedulesArgs<ExtArgs>
    _count?: boolean | DoctorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctor"]>

  export type DoctorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    profilePhoto?: boolean
    contactNumber?: boolean
    address?: boolean
    registrationNumber?: boolean
    experience?: boolean
    gender?: boolean
    appointmentFee?: boolean
    qualification?: boolean
    currentWorkPlace?: boolean
    designation?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctor"]>

  export type DoctorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    profilePhoto?: boolean
    contactNumber?: boolean
    address?: boolean
    registrationNumber?: boolean
    experience?: boolean
    gender?: boolean
    appointmentFee?: boolean
    qualification?: boolean
    currentWorkPlace?: boolean
    designation?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctor"]>

  export type DoctorSelectScalar = {
    id?: boolean
    name?: boolean
    profilePhoto?: boolean
    contactNumber?: boolean
    address?: boolean
    registrationNumber?: boolean
    experience?: boolean
    gender?: boolean
    appointmentFee?: boolean
    qualification?: boolean
    currentWorkPlace?: boolean
    designation?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
  }

  export type DoctorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "profilePhoto" | "contactNumber" | "address" | "registrationNumber" | "experience" | "gender" | "appointmentFee" | "qualification" | "currentWorkPlace" | "designation" | "isDeleted" | "createdAt" | "updatedAt" | "email", ExtArgs["result"]["doctor"]>
  export type DoctorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    doctorSpecialties?: boolean | Doctor$doctorSpecialtiesArgs<ExtArgs>
    doctorSchedules?: boolean | Doctor$doctorSchedulesArgs<ExtArgs>
    _count?: boolean | DoctorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DoctorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DoctorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DoctorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Doctor"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      doctorSpecialties: Prisma.$doctorSpecialtiesPayload<ExtArgs>[]
      doctorSchedules: Prisma.$DoctorSchedulesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      profilePhoto: string | null
      contactNumber: string
      address: string | null
      registrationNumber: string
      experience: number
      gender: $Enums.Gender
      appointmentFee: number
      qualification: string
      currentWorkPlace: string
      designation: string
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
      email: string
    }, ExtArgs["result"]["doctor"]>
    composites: {}
  }

  type DoctorGetPayload<S extends boolean | null | undefined | DoctorDefaultArgs> = $Result.GetResult<Prisma.$DoctorPayload, S>

  type DoctorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DoctorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoctorCountAggregateInputType | true
    }

  export interface DoctorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Doctor'], meta: { name: 'Doctor' } }
    /**
     * Find zero or one Doctor that matches the filter.
     * @param {DoctorFindUniqueArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DoctorFindUniqueArgs>(args: SelectSubset<T, DoctorFindUniqueArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Doctor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DoctorFindUniqueOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DoctorFindUniqueOrThrowArgs>(args: SelectSubset<T, DoctorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doctor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindFirstArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DoctorFindFirstArgs>(args?: SelectSubset<T, DoctorFindFirstArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doctor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindFirstOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DoctorFindFirstOrThrowArgs>(args?: SelectSubset<T, DoctorFindFirstOrThrowArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Doctors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Doctors
     * const doctors = await prisma.doctor.findMany()
     * 
     * // Get first 10 Doctors
     * const doctors = await prisma.doctor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doctorWithIdOnly = await prisma.doctor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DoctorFindManyArgs>(args?: SelectSubset<T, DoctorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Doctor.
     * @param {DoctorCreateArgs} args - Arguments to create a Doctor.
     * @example
     * // Create one Doctor
     * const Doctor = await prisma.doctor.create({
     *   data: {
     *     // ... data to create a Doctor
     *   }
     * })
     * 
     */
    create<T extends DoctorCreateArgs>(args: SelectSubset<T, DoctorCreateArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Doctors.
     * @param {DoctorCreateManyArgs} args - Arguments to create many Doctors.
     * @example
     * // Create many Doctors
     * const doctor = await prisma.doctor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DoctorCreateManyArgs>(args?: SelectSubset<T, DoctorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Doctors and returns the data saved in the database.
     * @param {DoctorCreateManyAndReturnArgs} args - Arguments to create many Doctors.
     * @example
     * // Create many Doctors
     * const doctor = await prisma.doctor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Doctors and only return the `id`
     * const doctorWithIdOnly = await prisma.doctor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DoctorCreateManyAndReturnArgs>(args?: SelectSubset<T, DoctorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Doctor.
     * @param {DoctorDeleteArgs} args - Arguments to delete one Doctor.
     * @example
     * // Delete one Doctor
     * const Doctor = await prisma.doctor.delete({
     *   where: {
     *     // ... filter to delete one Doctor
     *   }
     * })
     * 
     */
    delete<T extends DoctorDeleteArgs>(args: SelectSubset<T, DoctorDeleteArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Doctor.
     * @param {DoctorUpdateArgs} args - Arguments to update one Doctor.
     * @example
     * // Update one Doctor
     * const doctor = await prisma.doctor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DoctorUpdateArgs>(args: SelectSubset<T, DoctorUpdateArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Doctors.
     * @param {DoctorDeleteManyArgs} args - Arguments to filter Doctors to delete.
     * @example
     * // Delete a few Doctors
     * const { count } = await prisma.doctor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DoctorDeleteManyArgs>(args?: SelectSubset<T, DoctorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Doctors
     * const doctor = await prisma.doctor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DoctorUpdateManyArgs>(args: SelectSubset<T, DoctorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doctors and returns the data updated in the database.
     * @param {DoctorUpdateManyAndReturnArgs} args - Arguments to update many Doctors.
     * @example
     * // Update many Doctors
     * const doctor = await prisma.doctor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Doctors and only return the `id`
     * const doctorWithIdOnly = await prisma.doctor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DoctorUpdateManyAndReturnArgs>(args: SelectSubset<T, DoctorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Doctor.
     * @param {DoctorUpsertArgs} args - Arguments to update or create a Doctor.
     * @example
     * // Update or create a Doctor
     * const doctor = await prisma.doctor.upsert({
     *   create: {
     *     // ... data to create a Doctor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Doctor we want to update
     *   }
     * })
     */
    upsert<T extends DoctorUpsertArgs>(args: SelectSubset<T, DoctorUpsertArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorCountArgs} args - Arguments to filter Doctors to count.
     * @example
     * // Count the number of Doctors
     * const count = await prisma.doctor.count({
     *   where: {
     *     // ... the filter for the Doctors we want to count
     *   }
     * })
    **/
    count<T extends DoctorCountArgs>(
      args?: Subset<T, DoctorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DoctorAggregateArgs>(args: Subset<T, DoctorAggregateArgs>): Prisma.PrismaPromise<GetDoctorAggregateType<T>>

    /**
     * Group by Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DoctorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoctorGroupByArgs['orderBy'] }
        : { orderBy?: DoctorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DoctorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Doctor model
   */
  readonly fields: DoctorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Doctor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoctorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    doctorSpecialties<T extends Doctor$doctorSpecialtiesArgs<ExtArgs> = {}>(args?: Subset<T, Doctor$doctorSpecialtiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$doctorSpecialtiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    doctorSchedules<T extends Doctor$doctorSchedulesArgs<ExtArgs> = {}>(args?: Subset<T, Doctor$doctorSchedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorSchedulesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Doctor model
   */
  interface DoctorFieldRefs {
    readonly id: FieldRef<"Doctor", 'String'>
    readonly name: FieldRef<"Doctor", 'String'>
    readonly profilePhoto: FieldRef<"Doctor", 'String'>
    readonly contactNumber: FieldRef<"Doctor", 'String'>
    readonly address: FieldRef<"Doctor", 'String'>
    readonly registrationNumber: FieldRef<"Doctor", 'String'>
    readonly experience: FieldRef<"Doctor", 'Int'>
    readonly gender: FieldRef<"Doctor", 'Gender'>
    readonly appointmentFee: FieldRef<"Doctor", 'Int'>
    readonly qualification: FieldRef<"Doctor", 'String'>
    readonly currentWorkPlace: FieldRef<"Doctor", 'String'>
    readonly designation: FieldRef<"Doctor", 'String'>
    readonly isDeleted: FieldRef<"Doctor", 'Boolean'>
    readonly createdAt: FieldRef<"Doctor", 'DateTime'>
    readonly updatedAt: FieldRef<"Doctor", 'DateTime'>
    readonly email: FieldRef<"Doctor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Doctor findUnique
   */
  export type DoctorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor findUniqueOrThrow
   */
  export type DoctorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor findFirst
   */
  export type DoctorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doctors.
     */
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor findFirstOrThrow
   */
  export type DoctorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doctors.
     */
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor findMany
   */
  export type DoctorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctors to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor create
   */
  export type DoctorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * The data needed to create a Doctor.
     */
    data: XOR<DoctorCreateInput, DoctorUncheckedCreateInput>
  }

  /**
   * Doctor createMany
   */
  export type DoctorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Doctors.
     */
    data: DoctorCreateManyInput | DoctorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Doctor createManyAndReturn
   */
  export type DoctorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * The data used to create many Doctors.
     */
    data: DoctorCreateManyInput | DoctorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Doctor update
   */
  export type DoctorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * The data needed to update a Doctor.
     */
    data: XOR<DoctorUpdateInput, DoctorUncheckedUpdateInput>
    /**
     * Choose, which Doctor to update.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor updateMany
   */
  export type DoctorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Doctors.
     */
    data: XOR<DoctorUpdateManyMutationInput, DoctorUncheckedUpdateManyInput>
    /**
     * Filter which Doctors to update
     */
    where?: DoctorWhereInput
    /**
     * Limit how many Doctors to update.
     */
    limit?: number
  }

  /**
   * Doctor updateManyAndReturn
   */
  export type DoctorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * The data used to update Doctors.
     */
    data: XOR<DoctorUpdateManyMutationInput, DoctorUncheckedUpdateManyInput>
    /**
     * Filter which Doctors to update
     */
    where?: DoctorWhereInput
    /**
     * Limit how many Doctors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Doctor upsert
   */
  export type DoctorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * The filter to search for the Doctor to update in case it exists.
     */
    where: DoctorWhereUniqueInput
    /**
     * In case the Doctor found by the `where` argument doesn't exist, create a new Doctor with this data.
     */
    create: XOR<DoctorCreateInput, DoctorUncheckedCreateInput>
    /**
     * In case the Doctor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoctorUpdateInput, DoctorUncheckedUpdateInput>
  }

  /**
   * Doctor delete
   */
  export type DoctorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter which Doctor to delete.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor deleteMany
   */
  export type DoctorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doctors to delete
     */
    where?: DoctorWhereInput
    /**
     * Limit how many Doctors to delete.
     */
    limit?: number
  }

  /**
   * Doctor.doctorSpecialties
   */
  export type Doctor$doctorSpecialtiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctorSpecialties
     */
    select?: doctorSpecialtiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctorSpecialties
     */
    omit?: doctorSpecialtiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorSpecialtiesInclude<ExtArgs> | null
    where?: doctorSpecialtiesWhereInput
    orderBy?: doctorSpecialtiesOrderByWithRelationInput | doctorSpecialtiesOrderByWithRelationInput[]
    cursor?: doctorSpecialtiesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DoctorSpecialtiesScalarFieldEnum | DoctorSpecialtiesScalarFieldEnum[]
  }

  /**
   * Doctor.doctorSchedules
   */
  export type Doctor$doctorSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSchedules
     */
    select?: DoctorSchedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSchedules
     */
    omit?: DoctorSchedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSchedulesInclude<ExtArgs> | null
    where?: DoctorSchedulesWhereInput
    orderBy?: DoctorSchedulesOrderByWithRelationInput | DoctorSchedulesOrderByWithRelationInput[]
    cursor?: DoctorSchedulesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DoctorSchedulesScalarFieldEnum | DoctorSchedulesScalarFieldEnum[]
  }

  /**
   * Doctor without action
   */
  export type DoctorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
  }


  /**
   * Model Patient
   */

  export type AggregatePatient = {
    _count: PatientCountAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  export type PatientMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    profilePhoto: string | null
    contactNumber: string | null
    address: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatientMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    profilePhoto: string | null
    contactNumber: string | null
    address: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatientCountAggregateOutputType = {
    id: number
    email: number
    name: number
    profilePhoto: number
    contactNumber: number
    address: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PatientMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    profilePhoto?: true
    contactNumber?: true
    address?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatientMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    profilePhoto?: true
    contactNumber?: true
    address?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatientCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    profilePhoto?: true
    contactNumber?: true
    address?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PatientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patient to aggregate.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Patients
    **/
    _count?: true | PatientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientMaxAggregateInputType
  }

  export type GetPatientAggregateType<T extends PatientAggregateArgs> = {
        [P in keyof T & keyof AggregatePatient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatient[P]>
      : GetScalarType<T[P], AggregatePatient[P]>
  }




  export type PatientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
    orderBy?: PatientOrderByWithAggregationInput | PatientOrderByWithAggregationInput[]
    by: PatientScalarFieldEnum[] | PatientScalarFieldEnum
    having?: PatientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientCountAggregateInputType | true
    _min?: PatientMinAggregateInputType
    _max?: PatientMaxAggregateInputType
  }

  export type PatientGroupByOutputType = {
    id: string
    email: string
    name: string
    profilePhoto: string | null
    contactNumber: string | null
    address: string | null
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: PatientCountAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  type GetPatientGroupByPayload<T extends PatientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientGroupByOutputType[P]>
            : GetScalarType<T[P], PatientGroupByOutputType[P]>
        }
      >
    >


  export type PatientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    profilePhoto?: boolean
    contactNumber?: boolean
    address?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patientHealthData?: boolean | Patient$patientHealthDataArgs<ExtArgs>
    medicalReports?: boolean | Patient$medicalReportsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    profilePhoto?: boolean
    contactNumber?: boolean
    address?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    profilePhoto?: boolean
    contactNumber?: boolean
    address?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    profilePhoto?: boolean
    contactNumber?: boolean
    address?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PatientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "profilePhoto" | "contactNumber" | "address" | "isDeleted" | "createdAt" | "updatedAt", ExtArgs["result"]["patient"]>
  export type PatientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patientHealthData?: boolean | Patient$patientHealthDataArgs<ExtArgs>
    medicalReports?: boolean | Patient$medicalReportsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PatientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PatientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PatientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Patient"
    objects: {
      patientHealthData: Prisma.$PatientHealthDataPayload<ExtArgs> | null
      medicalReports: Prisma.$MedicalReportPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      profilePhoto: string | null
      contactNumber: string | null
      address: string | null
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["patient"]>
    composites: {}
  }

  type PatientGetPayload<S extends boolean | null | undefined | PatientDefaultArgs> = $Result.GetResult<Prisma.$PatientPayload, S>

  type PatientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PatientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatientCountAggregateInputType | true
    }

  export interface PatientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Patient'], meta: { name: 'Patient' } }
    /**
     * Find zero or one Patient that matches the filter.
     * @param {PatientFindUniqueArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatientFindUniqueArgs>(args: SelectSubset<T, PatientFindUniqueArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Patient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PatientFindUniqueOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatientFindUniqueOrThrowArgs>(args: SelectSubset<T, PatientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatientFindFirstArgs>(args?: SelectSubset<T, PatientFindFirstArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatientFindFirstOrThrowArgs>(args?: SelectSubset<T, PatientFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patients
     * const patients = await prisma.patient.findMany()
     * 
     * // Get first 10 Patients
     * const patients = await prisma.patient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patientWithIdOnly = await prisma.patient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PatientFindManyArgs>(args?: SelectSubset<T, PatientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Patient.
     * @param {PatientCreateArgs} args - Arguments to create a Patient.
     * @example
     * // Create one Patient
     * const Patient = await prisma.patient.create({
     *   data: {
     *     // ... data to create a Patient
     *   }
     * })
     * 
     */
    create<T extends PatientCreateArgs>(args: SelectSubset<T, PatientCreateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Patients.
     * @param {PatientCreateManyArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatientCreateManyArgs>(args?: SelectSubset<T, PatientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Patients and returns the data saved in the database.
     * @param {PatientCreateManyAndReturnArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PatientCreateManyAndReturnArgs>(args?: SelectSubset<T, PatientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Patient.
     * @param {PatientDeleteArgs} args - Arguments to delete one Patient.
     * @example
     * // Delete one Patient
     * const Patient = await prisma.patient.delete({
     *   where: {
     *     // ... filter to delete one Patient
     *   }
     * })
     * 
     */
    delete<T extends PatientDeleteArgs>(args: SelectSubset<T, PatientDeleteArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Patient.
     * @param {PatientUpdateArgs} args - Arguments to update one Patient.
     * @example
     * // Update one Patient
     * const patient = await prisma.patient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatientUpdateArgs>(args: SelectSubset<T, PatientUpdateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Patients.
     * @param {PatientDeleteManyArgs} args - Arguments to filter Patients to delete.
     * @example
     * // Delete a few Patients
     * const { count } = await prisma.patient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatientDeleteManyArgs>(args?: SelectSubset<T, PatientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatientUpdateManyArgs>(args: SelectSubset<T, PatientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients and returns the data updated in the database.
     * @param {PatientUpdateManyAndReturnArgs} args - Arguments to update many Patients.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PatientUpdateManyAndReturnArgs>(args: SelectSubset<T, PatientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Patient.
     * @param {PatientUpsertArgs} args - Arguments to update or create a Patient.
     * @example
     * // Update or create a Patient
     * const patient = await prisma.patient.upsert({
     *   create: {
     *     // ... data to create a Patient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patient we want to update
     *   }
     * })
     */
    upsert<T extends PatientUpsertArgs>(args: SelectSubset<T, PatientUpsertArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientCountArgs} args - Arguments to filter Patients to count.
     * @example
     * // Count the number of Patients
     * const count = await prisma.patient.count({
     *   where: {
     *     // ... the filter for the Patients we want to count
     *   }
     * })
    **/
    count<T extends PatientCountArgs>(
      args?: Subset<T, PatientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PatientAggregateArgs>(args: Subset<T, PatientAggregateArgs>): Prisma.PrismaPromise<GetPatientAggregateType<T>>

    /**
     * Group by Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PatientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientGroupByArgs['orderBy'] }
        : { orderBy?: PatientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PatientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Patient model
   */
  readonly fields: PatientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Patient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patientHealthData<T extends Patient$patientHealthDataArgs<ExtArgs> = {}>(args?: Subset<T, Patient$patientHealthDataArgs<ExtArgs>>): Prisma__PatientHealthDataClient<$Result.GetResult<Prisma.$PatientHealthDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    medicalReports<T extends Patient$medicalReportsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$medicalReportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Patient model
   */
  interface PatientFieldRefs {
    readonly id: FieldRef<"Patient", 'String'>
    readonly email: FieldRef<"Patient", 'String'>
    readonly name: FieldRef<"Patient", 'String'>
    readonly profilePhoto: FieldRef<"Patient", 'String'>
    readonly contactNumber: FieldRef<"Patient", 'String'>
    readonly address: FieldRef<"Patient", 'String'>
    readonly isDeleted: FieldRef<"Patient", 'Boolean'>
    readonly createdAt: FieldRef<"Patient", 'DateTime'>
    readonly updatedAt: FieldRef<"Patient", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Patient findUnique
   */
  export type PatientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findUniqueOrThrow
   */
  export type PatientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findFirst
   */
  export type PatientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findFirstOrThrow
   */
  export type PatientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findMany
   */
  export type PatientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient create
   */
  export type PatientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to create a Patient.
     */
    data: XOR<PatientCreateInput, PatientUncheckedCreateInput>
  }

  /**
   * Patient createMany
   */
  export type PatientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Patient createManyAndReturn
   */
  export type PatientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Patient update
   */
  export type PatientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to update a Patient.
     */
    data: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
    /**
     * Choose, which Patient to update.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient updateMany
   */
  export type PatientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
  }

  /**
   * Patient updateManyAndReturn
   */
  export type PatientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Patient upsert
   */
  export type PatientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The filter to search for the Patient to update in case it exists.
     */
    where: PatientWhereUniqueInput
    /**
     * In case the Patient found by the `where` argument doesn't exist, create a new Patient with this data.
     */
    create: XOR<PatientCreateInput, PatientUncheckedCreateInput>
    /**
     * In case the Patient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
  }

  /**
   * Patient delete
   */
  export type PatientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter which Patient to delete.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient deleteMany
   */
  export type PatientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patients to delete
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to delete.
     */
    limit?: number
  }

  /**
   * Patient.patientHealthData
   */
  export type Patient$patientHealthDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientHealthData
     */
    select?: PatientHealthDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientHealthData
     */
    omit?: PatientHealthDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientHealthDataInclude<ExtArgs> | null
    where?: PatientHealthDataWhereInput
  }

  /**
   * Patient.medicalReports
   */
  export type Patient$medicalReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalReport
     */
    select?: MedicalReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalReport
     */
    omit?: MedicalReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalReportInclude<ExtArgs> | null
    where?: MedicalReportWhereInput
    orderBy?: MedicalReportOrderByWithRelationInput | MedicalReportOrderByWithRelationInput[]
    cursor?: MedicalReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicalReportScalarFieldEnum | MedicalReportScalarFieldEnum[]
  }

  /**
   * Patient without action
   */
  export type PatientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
  }


  /**
   * Model Specialties
   */

  export type AggregateSpecialties = {
    _count: SpecialtiesCountAggregateOutputType | null
    _min: SpecialtiesMinAggregateOutputType | null
    _max: SpecialtiesMaxAggregateOutputType | null
  }

  export type SpecialtiesMinAggregateOutputType = {
    id: string | null
    title: string | null
    icon: string | null
  }

  export type SpecialtiesMaxAggregateOutputType = {
    id: string | null
    title: string | null
    icon: string | null
  }

  export type SpecialtiesCountAggregateOutputType = {
    id: number
    title: number
    icon: number
    _all: number
  }


  export type SpecialtiesMinAggregateInputType = {
    id?: true
    title?: true
    icon?: true
  }

  export type SpecialtiesMaxAggregateInputType = {
    id?: true
    title?: true
    icon?: true
  }

  export type SpecialtiesCountAggregateInputType = {
    id?: true
    title?: true
    icon?: true
    _all?: true
  }

  export type SpecialtiesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Specialties to aggregate.
     */
    where?: SpecialtiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specialties to fetch.
     */
    orderBy?: SpecialtiesOrderByWithRelationInput | SpecialtiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpecialtiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specialties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specialties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Specialties
    **/
    _count?: true | SpecialtiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpecialtiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpecialtiesMaxAggregateInputType
  }

  export type GetSpecialtiesAggregateType<T extends SpecialtiesAggregateArgs> = {
        [P in keyof T & keyof AggregateSpecialties]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpecialties[P]>
      : GetScalarType<T[P], AggregateSpecialties[P]>
  }




  export type SpecialtiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpecialtiesWhereInput
    orderBy?: SpecialtiesOrderByWithAggregationInput | SpecialtiesOrderByWithAggregationInput[]
    by: SpecialtiesScalarFieldEnum[] | SpecialtiesScalarFieldEnum
    having?: SpecialtiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpecialtiesCountAggregateInputType | true
    _min?: SpecialtiesMinAggregateInputType
    _max?: SpecialtiesMaxAggregateInputType
  }

  export type SpecialtiesGroupByOutputType = {
    id: string
    title: string
    icon: string
    _count: SpecialtiesCountAggregateOutputType | null
    _min: SpecialtiesMinAggregateOutputType | null
    _max: SpecialtiesMaxAggregateOutputType | null
  }

  type GetSpecialtiesGroupByPayload<T extends SpecialtiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpecialtiesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpecialtiesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpecialtiesGroupByOutputType[P]>
            : GetScalarType<T[P], SpecialtiesGroupByOutputType[P]>
        }
      >
    >


  export type SpecialtiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    icon?: boolean
    doctorSpecialties?: boolean | Specialties$doctorSpecialtiesArgs<ExtArgs>
    _count?: boolean | SpecialtiesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["specialties"]>

  export type SpecialtiesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    icon?: boolean
  }, ExtArgs["result"]["specialties"]>

  export type SpecialtiesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    icon?: boolean
  }, ExtArgs["result"]["specialties"]>

  export type SpecialtiesSelectScalar = {
    id?: boolean
    title?: boolean
    icon?: boolean
  }

  export type SpecialtiesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "icon", ExtArgs["result"]["specialties"]>
  export type SpecialtiesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctorSpecialties?: boolean | Specialties$doctorSpecialtiesArgs<ExtArgs>
    _count?: boolean | SpecialtiesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SpecialtiesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SpecialtiesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SpecialtiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Specialties"
    objects: {
      doctorSpecialties: Prisma.$doctorSpecialtiesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      icon: string
    }, ExtArgs["result"]["specialties"]>
    composites: {}
  }

  type SpecialtiesGetPayload<S extends boolean | null | undefined | SpecialtiesDefaultArgs> = $Result.GetResult<Prisma.$SpecialtiesPayload, S>

  type SpecialtiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SpecialtiesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SpecialtiesCountAggregateInputType | true
    }

  export interface SpecialtiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Specialties'], meta: { name: 'Specialties' } }
    /**
     * Find zero or one Specialties that matches the filter.
     * @param {SpecialtiesFindUniqueArgs} args - Arguments to find a Specialties
     * @example
     * // Get one Specialties
     * const specialties = await prisma.specialties.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpecialtiesFindUniqueArgs>(args: SelectSubset<T, SpecialtiesFindUniqueArgs<ExtArgs>>): Prisma__SpecialtiesClient<$Result.GetResult<Prisma.$SpecialtiesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Specialties that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SpecialtiesFindUniqueOrThrowArgs} args - Arguments to find a Specialties
     * @example
     * // Get one Specialties
     * const specialties = await prisma.specialties.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpecialtiesFindUniqueOrThrowArgs>(args: SelectSubset<T, SpecialtiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpecialtiesClient<$Result.GetResult<Prisma.$SpecialtiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Specialties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialtiesFindFirstArgs} args - Arguments to find a Specialties
     * @example
     * // Get one Specialties
     * const specialties = await prisma.specialties.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpecialtiesFindFirstArgs>(args?: SelectSubset<T, SpecialtiesFindFirstArgs<ExtArgs>>): Prisma__SpecialtiesClient<$Result.GetResult<Prisma.$SpecialtiesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Specialties that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialtiesFindFirstOrThrowArgs} args - Arguments to find a Specialties
     * @example
     * // Get one Specialties
     * const specialties = await prisma.specialties.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpecialtiesFindFirstOrThrowArgs>(args?: SelectSubset<T, SpecialtiesFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpecialtiesClient<$Result.GetResult<Prisma.$SpecialtiesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Specialties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialtiesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Specialties
     * const specialties = await prisma.specialties.findMany()
     * 
     * // Get first 10 Specialties
     * const specialties = await prisma.specialties.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const specialtiesWithIdOnly = await prisma.specialties.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SpecialtiesFindManyArgs>(args?: SelectSubset<T, SpecialtiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialtiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Specialties.
     * @param {SpecialtiesCreateArgs} args - Arguments to create a Specialties.
     * @example
     * // Create one Specialties
     * const Specialties = await prisma.specialties.create({
     *   data: {
     *     // ... data to create a Specialties
     *   }
     * })
     * 
     */
    create<T extends SpecialtiesCreateArgs>(args: SelectSubset<T, SpecialtiesCreateArgs<ExtArgs>>): Prisma__SpecialtiesClient<$Result.GetResult<Prisma.$SpecialtiesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Specialties.
     * @param {SpecialtiesCreateManyArgs} args - Arguments to create many Specialties.
     * @example
     * // Create many Specialties
     * const specialties = await prisma.specialties.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SpecialtiesCreateManyArgs>(args?: SelectSubset<T, SpecialtiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Specialties and returns the data saved in the database.
     * @param {SpecialtiesCreateManyAndReturnArgs} args - Arguments to create many Specialties.
     * @example
     * // Create many Specialties
     * const specialties = await prisma.specialties.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Specialties and only return the `id`
     * const specialtiesWithIdOnly = await prisma.specialties.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SpecialtiesCreateManyAndReturnArgs>(args?: SelectSubset<T, SpecialtiesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialtiesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Specialties.
     * @param {SpecialtiesDeleteArgs} args - Arguments to delete one Specialties.
     * @example
     * // Delete one Specialties
     * const Specialties = await prisma.specialties.delete({
     *   where: {
     *     // ... filter to delete one Specialties
     *   }
     * })
     * 
     */
    delete<T extends SpecialtiesDeleteArgs>(args: SelectSubset<T, SpecialtiesDeleteArgs<ExtArgs>>): Prisma__SpecialtiesClient<$Result.GetResult<Prisma.$SpecialtiesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Specialties.
     * @param {SpecialtiesUpdateArgs} args - Arguments to update one Specialties.
     * @example
     * // Update one Specialties
     * const specialties = await prisma.specialties.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpecialtiesUpdateArgs>(args: SelectSubset<T, SpecialtiesUpdateArgs<ExtArgs>>): Prisma__SpecialtiesClient<$Result.GetResult<Prisma.$SpecialtiesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Specialties.
     * @param {SpecialtiesDeleteManyArgs} args - Arguments to filter Specialties to delete.
     * @example
     * // Delete a few Specialties
     * const { count } = await prisma.specialties.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpecialtiesDeleteManyArgs>(args?: SelectSubset<T, SpecialtiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Specialties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialtiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Specialties
     * const specialties = await prisma.specialties.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpecialtiesUpdateManyArgs>(args: SelectSubset<T, SpecialtiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Specialties and returns the data updated in the database.
     * @param {SpecialtiesUpdateManyAndReturnArgs} args - Arguments to update many Specialties.
     * @example
     * // Update many Specialties
     * const specialties = await prisma.specialties.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Specialties and only return the `id`
     * const specialtiesWithIdOnly = await prisma.specialties.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SpecialtiesUpdateManyAndReturnArgs>(args: SelectSubset<T, SpecialtiesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialtiesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Specialties.
     * @param {SpecialtiesUpsertArgs} args - Arguments to update or create a Specialties.
     * @example
     * // Update or create a Specialties
     * const specialties = await prisma.specialties.upsert({
     *   create: {
     *     // ... data to create a Specialties
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Specialties we want to update
     *   }
     * })
     */
    upsert<T extends SpecialtiesUpsertArgs>(args: SelectSubset<T, SpecialtiesUpsertArgs<ExtArgs>>): Prisma__SpecialtiesClient<$Result.GetResult<Prisma.$SpecialtiesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Specialties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialtiesCountArgs} args - Arguments to filter Specialties to count.
     * @example
     * // Count the number of Specialties
     * const count = await prisma.specialties.count({
     *   where: {
     *     // ... the filter for the Specialties we want to count
     *   }
     * })
    **/
    count<T extends SpecialtiesCountArgs>(
      args?: Subset<T, SpecialtiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpecialtiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Specialties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialtiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SpecialtiesAggregateArgs>(args: Subset<T, SpecialtiesAggregateArgs>): Prisma.PrismaPromise<GetSpecialtiesAggregateType<T>>

    /**
     * Group by Specialties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialtiesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SpecialtiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpecialtiesGroupByArgs['orderBy'] }
        : { orderBy?: SpecialtiesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SpecialtiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpecialtiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Specialties model
   */
  readonly fields: SpecialtiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Specialties.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpecialtiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctorSpecialties<T extends Specialties$doctorSpecialtiesArgs<ExtArgs> = {}>(args?: Subset<T, Specialties$doctorSpecialtiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$doctorSpecialtiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Specialties model
   */
  interface SpecialtiesFieldRefs {
    readonly id: FieldRef<"Specialties", 'String'>
    readonly title: FieldRef<"Specialties", 'String'>
    readonly icon: FieldRef<"Specialties", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Specialties findUnique
   */
  export type SpecialtiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialties
     */
    select?: SpecialtiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialties
     */
    omit?: SpecialtiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtiesInclude<ExtArgs> | null
    /**
     * Filter, which Specialties to fetch.
     */
    where: SpecialtiesWhereUniqueInput
  }

  /**
   * Specialties findUniqueOrThrow
   */
  export type SpecialtiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialties
     */
    select?: SpecialtiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialties
     */
    omit?: SpecialtiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtiesInclude<ExtArgs> | null
    /**
     * Filter, which Specialties to fetch.
     */
    where: SpecialtiesWhereUniqueInput
  }

  /**
   * Specialties findFirst
   */
  export type SpecialtiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialties
     */
    select?: SpecialtiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialties
     */
    omit?: SpecialtiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtiesInclude<ExtArgs> | null
    /**
     * Filter, which Specialties to fetch.
     */
    where?: SpecialtiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specialties to fetch.
     */
    orderBy?: SpecialtiesOrderByWithRelationInput | SpecialtiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Specialties.
     */
    cursor?: SpecialtiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specialties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specialties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Specialties.
     */
    distinct?: SpecialtiesScalarFieldEnum | SpecialtiesScalarFieldEnum[]
  }

  /**
   * Specialties findFirstOrThrow
   */
  export type SpecialtiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialties
     */
    select?: SpecialtiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialties
     */
    omit?: SpecialtiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtiesInclude<ExtArgs> | null
    /**
     * Filter, which Specialties to fetch.
     */
    where?: SpecialtiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specialties to fetch.
     */
    orderBy?: SpecialtiesOrderByWithRelationInput | SpecialtiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Specialties.
     */
    cursor?: SpecialtiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specialties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specialties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Specialties.
     */
    distinct?: SpecialtiesScalarFieldEnum | SpecialtiesScalarFieldEnum[]
  }

  /**
   * Specialties findMany
   */
  export type SpecialtiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialties
     */
    select?: SpecialtiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialties
     */
    omit?: SpecialtiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtiesInclude<ExtArgs> | null
    /**
     * Filter, which Specialties to fetch.
     */
    where?: SpecialtiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specialties to fetch.
     */
    orderBy?: SpecialtiesOrderByWithRelationInput | SpecialtiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Specialties.
     */
    cursor?: SpecialtiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specialties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specialties.
     */
    skip?: number
    distinct?: SpecialtiesScalarFieldEnum | SpecialtiesScalarFieldEnum[]
  }

  /**
   * Specialties create
   */
  export type SpecialtiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialties
     */
    select?: SpecialtiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialties
     */
    omit?: SpecialtiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtiesInclude<ExtArgs> | null
    /**
     * The data needed to create a Specialties.
     */
    data: XOR<SpecialtiesCreateInput, SpecialtiesUncheckedCreateInput>
  }

  /**
   * Specialties createMany
   */
  export type SpecialtiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Specialties.
     */
    data: SpecialtiesCreateManyInput | SpecialtiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Specialties createManyAndReturn
   */
  export type SpecialtiesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialties
     */
    select?: SpecialtiesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Specialties
     */
    omit?: SpecialtiesOmit<ExtArgs> | null
    /**
     * The data used to create many Specialties.
     */
    data: SpecialtiesCreateManyInput | SpecialtiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Specialties update
   */
  export type SpecialtiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialties
     */
    select?: SpecialtiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialties
     */
    omit?: SpecialtiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtiesInclude<ExtArgs> | null
    /**
     * The data needed to update a Specialties.
     */
    data: XOR<SpecialtiesUpdateInput, SpecialtiesUncheckedUpdateInput>
    /**
     * Choose, which Specialties to update.
     */
    where: SpecialtiesWhereUniqueInput
  }

  /**
   * Specialties updateMany
   */
  export type SpecialtiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Specialties.
     */
    data: XOR<SpecialtiesUpdateManyMutationInput, SpecialtiesUncheckedUpdateManyInput>
    /**
     * Filter which Specialties to update
     */
    where?: SpecialtiesWhereInput
    /**
     * Limit how many Specialties to update.
     */
    limit?: number
  }

  /**
   * Specialties updateManyAndReturn
   */
  export type SpecialtiesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialties
     */
    select?: SpecialtiesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Specialties
     */
    omit?: SpecialtiesOmit<ExtArgs> | null
    /**
     * The data used to update Specialties.
     */
    data: XOR<SpecialtiesUpdateManyMutationInput, SpecialtiesUncheckedUpdateManyInput>
    /**
     * Filter which Specialties to update
     */
    where?: SpecialtiesWhereInput
    /**
     * Limit how many Specialties to update.
     */
    limit?: number
  }

  /**
   * Specialties upsert
   */
  export type SpecialtiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialties
     */
    select?: SpecialtiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialties
     */
    omit?: SpecialtiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtiesInclude<ExtArgs> | null
    /**
     * The filter to search for the Specialties to update in case it exists.
     */
    where: SpecialtiesWhereUniqueInput
    /**
     * In case the Specialties found by the `where` argument doesn't exist, create a new Specialties with this data.
     */
    create: XOR<SpecialtiesCreateInput, SpecialtiesUncheckedCreateInput>
    /**
     * In case the Specialties was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpecialtiesUpdateInput, SpecialtiesUncheckedUpdateInput>
  }

  /**
   * Specialties delete
   */
  export type SpecialtiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialties
     */
    select?: SpecialtiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialties
     */
    omit?: SpecialtiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtiesInclude<ExtArgs> | null
    /**
     * Filter which Specialties to delete.
     */
    where: SpecialtiesWhereUniqueInput
  }

  /**
   * Specialties deleteMany
   */
  export type SpecialtiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Specialties to delete
     */
    where?: SpecialtiesWhereInput
    /**
     * Limit how many Specialties to delete.
     */
    limit?: number
  }

  /**
   * Specialties.doctorSpecialties
   */
  export type Specialties$doctorSpecialtiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctorSpecialties
     */
    select?: doctorSpecialtiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctorSpecialties
     */
    omit?: doctorSpecialtiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorSpecialtiesInclude<ExtArgs> | null
    where?: doctorSpecialtiesWhereInput
    orderBy?: doctorSpecialtiesOrderByWithRelationInput | doctorSpecialtiesOrderByWithRelationInput[]
    cursor?: doctorSpecialtiesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DoctorSpecialtiesScalarFieldEnum | DoctorSpecialtiesScalarFieldEnum[]
  }

  /**
   * Specialties without action
   */
  export type SpecialtiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialties
     */
    select?: SpecialtiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialties
     */
    omit?: SpecialtiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtiesInclude<ExtArgs> | null
  }


  /**
   * Model doctorSpecialties
   */

  export type AggregateDoctorSpecialties = {
    _count: DoctorSpecialtiesCountAggregateOutputType | null
    _min: DoctorSpecialtiesMinAggregateOutputType | null
    _max: DoctorSpecialtiesMaxAggregateOutputType | null
  }

  export type DoctorSpecialtiesMinAggregateOutputType = {
    specialtiesId: string | null
    doctorId: string | null
  }

  export type DoctorSpecialtiesMaxAggregateOutputType = {
    specialtiesId: string | null
    doctorId: string | null
  }

  export type DoctorSpecialtiesCountAggregateOutputType = {
    specialtiesId: number
    doctorId: number
    _all: number
  }


  export type DoctorSpecialtiesMinAggregateInputType = {
    specialtiesId?: true
    doctorId?: true
  }

  export type DoctorSpecialtiesMaxAggregateInputType = {
    specialtiesId?: true
    doctorId?: true
  }

  export type DoctorSpecialtiesCountAggregateInputType = {
    specialtiesId?: true
    doctorId?: true
    _all?: true
  }

  export type DoctorSpecialtiesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which doctorSpecialties to aggregate.
     */
    where?: doctorSpecialtiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of doctorSpecialties to fetch.
     */
    orderBy?: doctorSpecialtiesOrderByWithRelationInput | doctorSpecialtiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: doctorSpecialtiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` doctorSpecialties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` doctorSpecialties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned doctorSpecialties
    **/
    _count?: true | DoctorSpecialtiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorSpecialtiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorSpecialtiesMaxAggregateInputType
  }

  export type GetDoctorSpecialtiesAggregateType<T extends DoctorSpecialtiesAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctorSpecialties]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctorSpecialties[P]>
      : GetScalarType<T[P], AggregateDoctorSpecialties[P]>
  }




  export type doctorSpecialtiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: doctorSpecialtiesWhereInput
    orderBy?: doctorSpecialtiesOrderByWithAggregationInput | doctorSpecialtiesOrderByWithAggregationInput[]
    by: DoctorSpecialtiesScalarFieldEnum[] | DoctorSpecialtiesScalarFieldEnum
    having?: doctorSpecialtiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorSpecialtiesCountAggregateInputType | true
    _min?: DoctorSpecialtiesMinAggregateInputType
    _max?: DoctorSpecialtiesMaxAggregateInputType
  }

  export type DoctorSpecialtiesGroupByOutputType = {
    specialtiesId: string
    doctorId: string
    _count: DoctorSpecialtiesCountAggregateOutputType | null
    _min: DoctorSpecialtiesMinAggregateOutputType | null
    _max: DoctorSpecialtiesMaxAggregateOutputType | null
  }

  type GetDoctorSpecialtiesGroupByPayload<T extends doctorSpecialtiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoctorSpecialtiesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorSpecialtiesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorSpecialtiesGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorSpecialtiesGroupByOutputType[P]>
        }
      >
    >


  export type doctorSpecialtiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    specialtiesId?: boolean
    doctorId?: boolean
    specialties?: boolean | SpecialtiesDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctorSpecialties"]>

  export type doctorSpecialtiesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    specialtiesId?: boolean
    doctorId?: boolean
    specialties?: boolean | SpecialtiesDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctorSpecialties"]>

  export type doctorSpecialtiesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    specialtiesId?: boolean
    doctorId?: boolean
    specialties?: boolean | SpecialtiesDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctorSpecialties"]>

  export type doctorSpecialtiesSelectScalar = {
    specialtiesId?: boolean
    doctorId?: boolean
  }

  export type doctorSpecialtiesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"specialtiesId" | "doctorId", ExtArgs["result"]["doctorSpecialties"]>
  export type doctorSpecialtiesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    specialties?: boolean | SpecialtiesDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }
  export type doctorSpecialtiesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    specialties?: boolean | SpecialtiesDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }
  export type doctorSpecialtiesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    specialties?: boolean | SpecialtiesDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }

  export type $doctorSpecialtiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "doctorSpecialties"
    objects: {
      specialties: Prisma.$SpecialtiesPayload<ExtArgs>
      doctor: Prisma.$DoctorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      specialtiesId: string
      doctorId: string
    }, ExtArgs["result"]["doctorSpecialties"]>
    composites: {}
  }

  type doctorSpecialtiesGetPayload<S extends boolean | null | undefined | doctorSpecialtiesDefaultArgs> = $Result.GetResult<Prisma.$doctorSpecialtiesPayload, S>

  type doctorSpecialtiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<doctorSpecialtiesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoctorSpecialtiesCountAggregateInputType | true
    }

  export interface doctorSpecialtiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['doctorSpecialties'], meta: { name: 'doctorSpecialties' } }
    /**
     * Find zero or one DoctorSpecialties that matches the filter.
     * @param {doctorSpecialtiesFindUniqueArgs} args - Arguments to find a DoctorSpecialties
     * @example
     * // Get one DoctorSpecialties
     * const doctorSpecialties = await prisma.doctorSpecialties.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends doctorSpecialtiesFindUniqueArgs>(args: SelectSubset<T, doctorSpecialtiesFindUniqueArgs<ExtArgs>>): Prisma__doctorSpecialtiesClient<$Result.GetResult<Prisma.$doctorSpecialtiesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DoctorSpecialties that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {doctorSpecialtiesFindUniqueOrThrowArgs} args - Arguments to find a DoctorSpecialties
     * @example
     * // Get one DoctorSpecialties
     * const doctorSpecialties = await prisma.doctorSpecialties.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends doctorSpecialtiesFindUniqueOrThrowArgs>(args: SelectSubset<T, doctorSpecialtiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__doctorSpecialtiesClient<$Result.GetResult<Prisma.$doctorSpecialtiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DoctorSpecialties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorSpecialtiesFindFirstArgs} args - Arguments to find a DoctorSpecialties
     * @example
     * // Get one DoctorSpecialties
     * const doctorSpecialties = await prisma.doctorSpecialties.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends doctorSpecialtiesFindFirstArgs>(args?: SelectSubset<T, doctorSpecialtiesFindFirstArgs<ExtArgs>>): Prisma__doctorSpecialtiesClient<$Result.GetResult<Prisma.$doctorSpecialtiesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DoctorSpecialties that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorSpecialtiesFindFirstOrThrowArgs} args - Arguments to find a DoctorSpecialties
     * @example
     * // Get one DoctorSpecialties
     * const doctorSpecialties = await prisma.doctorSpecialties.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends doctorSpecialtiesFindFirstOrThrowArgs>(args?: SelectSubset<T, doctorSpecialtiesFindFirstOrThrowArgs<ExtArgs>>): Prisma__doctorSpecialtiesClient<$Result.GetResult<Prisma.$doctorSpecialtiesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DoctorSpecialties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorSpecialtiesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DoctorSpecialties
     * const doctorSpecialties = await prisma.doctorSpecialties.findMany()
     * 
     * // Get first 10 DoctorSpecialties
     * const doctorSpecialties = await prisma.doctorSpecialties.findMany({ take: 10 })
     * 
     * // Only select the `specialtiesId`
     * const doctorSpecialtiesWithSpecialtiesIdOnly = await prisma.doctorSpecialties.findMany({ select: { specialtiesId: true } })
     * 
     */
    findMany<T extends doctorSpecialtiesFindManyArgs>(args?: SelectSubset<T, doctorSpecialtiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$doctorSpecialtiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DoctorSpecialties.
     * @param {doctorSpecialtiesCreateArgs} args - Arguments to create a DoctorSpecialties.
     * @example
     * // Create one DoctorSpecialties
     * const DoctorSpecialties = await prisma.doctorSpecialties.create({
     *   data: {
     *     // ... data to create a DoctorSpecialties
     *   }
     * })
     * 
     */
    create<T extends doctorSpecialtiesCreateArgs>(args: SelectSubset<T, doctorSpecialtiesCreateArgs<ExtArgs>>): Prisma__doctorSpecialtiesClient<$Result.GetResult<Prisma.$doctorSpecialtiesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DoctorSpecialties.
     * @param {doctorSpecialtiesCreateManyArgs} args - Arguments to create many DoctorSpecialties.
     * @example
     * // Create many DoctorSpecialties
     * const doctorSpecialties = await prisma.doctorSpecialties.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends doctorSpecialtiesCreateManyArgs>(args?: SelectSubset<T, doctorSpecialtiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DoctorSpecialties and returns the data saved in the database.
     * @param {doctorSpecialtiesCreateManyAndReturnArgs} args - Arguments to create many DoctorSpecialties.
     * @example
     * // Create many DoctorSpecialties
     * const doctorSpecialties = await prisma.doctorSpecialties.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DoctorSpecialties and only return the `specialtiesId`
     * const doctorSpecialtiesWithSpecialtiesIdOnly = await prisma.doctorSpecialties.createManyAndReturn({
     *   select: { specialtiesId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends doctorSpecialtiesCreateManyAndReturnArgs>(args?: SelectSubset<T, doctorSpecialtiesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$doctorSpecialtiesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DoctorSpecialties.
     * @param {doctorSpecialtiesDeleteArgs} args - Arguments to delete one DoctorSpecialties.
     * @example
     * // Delete one DoctorSpecialties
     * const DoctorSpecialties = await prisma.doctorSpecialties.delete({
     *   where: {
     *     // ... filter to delete one DoctorSpecialties
     *   }
     * })
     * 
     */
    delete<T extends doctorSpecialtiesDeleteArgs>(args: SelectSubset<T, doctorSpecialtiesDeleteArgs<ExtArgs>>): Prisma__doctorSpecialtiesClient<$Result.GetResult<Prisma.$doctorSpecialtiesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DoctorSpecialties.
     * @param {doctorSpecialtiesUpdateArgs} args - Arguments to update one DoctorSpecialties.
     * @example
     * // Update one DoctorSpecialties
     * const doctorSpecialties = await prisma.doctorSpecialties.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends doctorSpecialtiesUpdateArgs>(args: SelectSubset<T, doctorSpecialtiesUpdateArgs<ExtArgs>>): Prisma__doctorSpecialtiesClient<$Result.GetResult<Prisma.$doctorSpecialtiesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DoctorSpecialties.
     * @param {doctorSpecialtiesDeleteManyArgs} args - Arguments to filter DoctorSpecialties to delete.
     * @example
     * // Delete a few DoctorSpecialties
     * const { count } = await prisma.doctorSpecialties.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends doctorSpecialtiesDeleteManyArgs>(args?: SelectSubset<T, doctorSpecialtiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DoctorSpecialties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorSpecialtiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DoctorSpecialties
     * const doctorSpecialties = await prisma.doctorSpecialties.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends doctorSpecialtiesUpdateManyArgs>(args: SelectSubset<T, doctorSpecialtiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DoctorSpecialties and returns the data updated in the database.
     * @param {doctorSpecialtiesUpdateManyAndReturnArgs} args - Arguments to update many DoctorSpecialties.
     * @example
     * // Update many DoctorSpecialties
     * const doctorSpecialties = await prisma.doctorSpecialties.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DoctorSpecialties and only return the `specialtiesId`
     * const doctorSpecialtiesWithSpecialtiesIdOnly = await prisma.doctorSpecialties.updateManyAndReturn({
     *   select: { specialtiesId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends doctorSpecialtiesUpdateManyAndReturnArgs>(args: SelectSubset<T, doctorSpecialtiesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$doctorSpecialtiesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DoctorSpecialties.
     * @param {doctorSpecialtiesUpsertArgs} args - Arguments to update or create a DoctorSpecialties.
     * @example
     * // Update or create a DoctorSpecialties
     * const doctorSpecialties = await prisma.doctorSpecialties.upsert({
     *   create: {
     *     // ... data to create a DoctorSpecialties
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DoctorSpecialties we want to update
     *   }
     * })
     */
    upsert<T extends doctorSpecialtiesUpsertArgs>(args: SelectSubset<T, doctorSpecialtiesUpsertArgs<ExtArgs>>): Prisma__doctorSpecialtiesClient<$Result.GetResult<Prisma.$doctorSpecialtiesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DoctorSpecialties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorSpecialtiesCountArgs} args - Arguments to filter DoctorSpecialties to count.
     * @example
     * // Count the number of DoctorSpecialties
     * const count = await prisma.doctorSpecialties.count({
     *   where: {
     *     // ... the filter for the DoctorSpecialties we want to count
     *   }
     * })
    **/
    count<T extends doctorSpecialtiesCountArgs>(
      args?: Subset<T, doctorSpecialtiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorSpecialtiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DoctorSpecialties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSpecialtiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DoctorSpecialtiesAggregateArgs>(args: Subset<T, DoctorSpecialtiesAggregateArgs>): Prisma.PrismaPromise<GetDoctorSpecialtiesAggregateType<T>>

    /**
     * Group by DoctorSpecialties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorSpecialtiesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends doctorSpecialtiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: doctorSpecialtiesGroupByArgs['orderBy'] }
        : { orderBy?: doctorSpecialtiesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, doctorSpecialtiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorSpecialtiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the doctorSpecialties model
   */
  readonly fields: doctorSpecialtiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for doctorSpecialties.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__doctorSpecialtiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    specialties<T extends SpecialtiesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SpecialtiesDefaultArgs<ExtArgs>>): Prisma__SpecialtiesClient<$Result.GetResult<Prisma.$SpecialtiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    doctor<T extends DoctorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoctorDefaultArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the doctorSpecialties model
   */
  interface doctorSpecialtiesFieldRefs {
    readonly specialtiesId: FieldRef<"doctorSpecialties", 'String'>
    readonly doctorId: FieldRef<"doctorSpecialties", 'String'>
  }
    

  // Custom InputTypes
  /**
   * doctorSpecialties findUnique
   */
  export type doctorSpecialtiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctorSpecialties
     */
    select?: doctorSpecialtiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctorSpecialties
     */
    omit?: doctorSpecialtiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorSpecialtiesInclude<ExtArgs> | null
    /**
     * Filter, which doctorSpecialties to fetch.
     */
    where: doctorSpecialtiesWhereUniqueInput
  }

  /**
   * doctorSpecialties findUniqueOrThrow
   */
  export type doctorSpecialtiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctorSpecialties
     */
    select?: doctorSpecialtiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctorSpecialties
     */
    omit?: doctorSpecialtiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorSpecialtiesInclude<ExtArgs> | null
    /**
     * Filter, which doctorSpecialties to fetch.
     */
    where: doctorSpecialtiesWhereUniqueInput
  }

  /**
   * doctorSpecialties findFirst
   */
  export type doctorSpecialtiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctorSpecialties
     */
    select?: doctorSpecialtiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctorSpecialties
     */
    omit?: doctorSpecialtiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorSpecialtiesInclude<ExtArgs> | null
    /**
     * Filter, which doctorSpecialties to fetch.
     */
    where?: doctorSpecialtiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of doctorSpecialties to fetch.
     */
    orderBy?: doctorSpecialtiesOrderByWithRelationInput | doctorSpecialtiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for doctorSpecialties.
     */
    cursor?: doctorSpecialtiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` doctorSpecialties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` doctorSpecialties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of doctorSpecialties.
     */
    distinct?: DoctorSpecialtiesScalarFieldEnum | DoctorSpecialtiesScalarFieldEnum[]
  }

  /**
   * doctorSpecialties findFirstOrThrow
   */
  export type doctorSpecialtiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctorSpecialties
     */
    select?: doctorSpecialtiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctorSpecialties
     */
    omit?: doctorSpecialtiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorSpecialtiesInclude<ExtArgs> | null
    /**
     * Filter, which doctorSpecialties to fetch.
     */
    where?: doctorSpecialtiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of doctorSpecialties to fetch.
     */
    orderBy?: doctorSpecialtiesOrderByWithRelationInput | doctorSpecialtiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for doctorSpecialties.
     */
    cursor?: doctorSpecialtiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` doctorSpecialties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` doctorSpecialties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of doctorSpecialties.
     */
    distinct?: DoctorSpecialtiesScalarFieldEnum | DoctorSpecialtiesScalarFieldEnum[]
  }

  /**
   * doctorSpecialties findMany
   */
  export type doctorSpecialtiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctorSpecialties
     */
    select?: doctorSpecialtiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctorSpecialties
     */
    omit?: doctorSpecialtiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorSpecialtiesInclude<ExtArgs> | null
    /**
     * Filter, which doctorSpecialties to fetch.
     */
    where?: doctorSpecialtiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of doctorSpecialties to fetch.
     */
    orderBy?: doctorSpecialtiesOrderByWithRelationInput | doctorSpecialtiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing doctorSpecialties.
     */
    cursor?: doctorSpecialtiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` doctorSpecialties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` doctorSpecialties.
     */
    skip?: number
    distinct?: DoctorSpecialtiesScalarFieldEnum | DoctorSpecialtiesScalarFieldEnum[]
  }

  /**
   * doctorSpecialties create
   */
  export type doctorSpecialtiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctorSpecialties
     */
    select?: doctorSpecialtiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctorSpecialties
     */
    omit?: doctorSpecialtiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorSpecialtiesInclude<ExtArgs> | null
    /**
     * The data needed to create a doctorSpecialties.
     */
    data: XOR<doctorSpecialtiesCreateInput, doctorSpecialtiesUncheckedCreateInput>
  }

  /**
   * doctorSpecialties createMany
   */
  export type doctorSpecialtiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many doctorSpecialties.
     */
    data: doctorSpecialtiesCreateManyInput | doctorSpecialtiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * doctorSpecialties createManyAndReturn
   */
  export type doctorSpecialtiesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctorSpecialties
     */
    select?: doctorSpecialtiesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the doctorSpecialties
     */
    omit?: doctorSpecialtiesOmit<ExtArgs> | null
    /**
     * The data used to create many doctorSpecialties.
     */
    data: doctorSpecialtiesCreateManyInput | doctorSpecialtiesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorSpecialtiesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * doctorSpecialties update
   */
  export type doctorSpecialtiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctorSpecialties
     */
    select?: doctorSpecialtiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctorSpecialties
     */
    omit?: doctorSpecialtiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorSpecialtiesInclude<ExtArgs> | null
    /**
     * The data needed to update a doctorSpecialties.
     */
    data: XOR<doctorSpecialtiesUpdateInput, doctorSpecialtiesUncheckedUpdateInput>
    /**
     * Choose, which doctorSpecialties to update.
     */
    where: doctorSpecialtiesWhereUniqueInput
  }

  /**
   * doctorSpecialties updateMany
   */
  export type doctorSpecialtiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update doctorSpecialties.
     */
    data: XOR<doctorSpecialtiesUpdateManyMutationInput, doctorSpecialtiesUncheckedUpdateManyInput>
    /**
     * Filter which doctorSpecialties to update
     */
    where?: doctorSpecialtiesWhereInput
    /**
     * Limit how many doctorSpecialties to update.
     */
    limit?: number
  }

  /**
   * doctorSpecialties updateManyAndReturn
   */
  export type doctorSpecialtiesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctorSpecialties
     */
    select?: doctorSpecialtiesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the doctorSpecialties
     */
    omit?: doctorSpecialtiesOmit<ExtArgs> | null
    /**
     * The data used to update doctorSpecialties.
     */
    data: XOR<doctorSpecialtiesUpdateManyMutationInput, doctorSpecialtiesUncheckedUpdateManyInput>
    /**
     * Filter which doctorSpecialties to update
     */
    where?: doctorSpecialtiesWhereInput
    /**
     * Limit how many doctorSpecialties to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorSpecialtiesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * doctorSpecialties upsert
   */
  export type doctorSpecialtiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctorSpecialties
     */
    select?: doctorSpecialtiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctorSpecialties
     */
    omit?: doctorSpecialtiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorSpecialtiesInclude<ExtArgs> | null
    /**
     * The filter to search for the doctorSpecialties to update in case it exists.
     */
    where: doctorSpecialtiesWhereUniqueInput
    /**
     * In case the doctorSpecialties found by the `where` argument doesn't exist, create a new doctorSpecialties with this data.
     */
    create: XOR<doctorSpecialtiesCreateInput, doctorSpecialtiesUncheckedCreateInput>
    /**
     * In case the doctorSpecialties was found with the provided `where` argument, update it with this data.
     */
    update: XOR<doctorSpecialtiesUpdateInput, doctorSpecialtiesUncheckedUpdateInput>
  }

  /**
   * doctorSpecialties delete
   */
  export type doctorSpecialtiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctorSpecialties
     */
    select?: doctorSpecialtiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctorSpecialties
     */
    omit?: doctorSpecialtiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorSpecialtiesInclude<ExtArgs> | null
    /**
     * Filter which doctorSpecialties to delete.
     */
    where: doctorSpecialtiesWhereUniqueInput
  }

  /**
   * doctorSpecialties deleteMany
   */
  export type doctorSpecialtiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which doctorSpecialties to delete
     */
    where?: doctorSpecialtiesWhereInput
    /**
     * Limit how many doctorSpecialties to delete.
     */
    limit?: number
  }

  /**
   * doctorSpecialties without action
   */
  export type doctorSpecialtiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctorSpecialties
     */
    select?: doctorSpecialtiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctorSpecialties
     */
    omit?: doctorSpecialtiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorSpecialtiesInclude<ExtArgs> | null
  }


  /**
   * Model PatientHealthData
   */

  export type AggregatePatientHealthData = {
    _count: PatientHealthDataCountAggregateOutputType | null
    _min: PatientHealthDataMinAggregateOutputType | null
    _max: PatientHealthDataMaxAggregateOutputType | null
  }

  export type PatientHealthDataMinAggregateOutputType = {
    id: string | null
    patientId: string | null
    gender: $Enums.Gender | null
    dateOfBirth: string | null
    bloodGroup: $Enums.BloodGroup | null
    hasAllergies: boolean | null
    hasDiabetes: boolean | null
    height: string | null
    weight: string | null
    smokingStatus: boolean | null
    dietaryPreferences: string | null
    pregnancyStatus: boolean | null
    mentalHealthHistory: string | null
    immunizationStatus: string | null
    hasPastSurgeries: boolean | null
    recentAnxiety: boolean | null
    recentDepression: boolean | null
    maritalStatus: $Enums.MaritalStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatientHealthDataMaxAggregateOutputType = {
    id: string | null
    patientId: string | null
    gender: $Enums.Gender | null
    dateOfBirth: string | null
    bloodGroup: $Enums.BloodGroup | null
    hasAllergies: boolean | null
    hasDiabetes: boolean | null
    height: string | null
    weight: string | null
    smokingStatus: boolean | null
    dietaryPreferences: string | null
    pregnancyStatus: boolean | null
    mentalHealthHistory: string | null
    immunizationStatus: string | null
    hasPastSurgeries: boolean | null
    recentAnxiety: boolean | null
    recentDepression: boolean | null
    maritalStatus: $Enums.MaritalStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatientHealthDataCountAggregateOutputType = {
    id: number
    patientId: number
    gender: number
    dateOfBirth: number
    bloodGroup: number
    hasAllergies: number
    hasDiabetes: number
    height: number
    weight: number
    smokingStatus: number
    dietaryPreferences: number
    pregnancyStatus: number
    mentalHealthHistory: number
    immunizationStatus: number
    hasPastSurgeries: number
    recentAnxiety: number
    recentDepression: number
    maritalStatus: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PatientHealthDataMinAggregateInputType = {
    id?: true
    patientId?: true
    gender?: true
    dateOfBirth?: true
    bloodGroup?: true
    hasAllergies?: true
    hasDiabetes?: true
    height?: true
    weight?: true
    smokingStatus?: true
    dietaryPreferences?: true
    pregnancyStatus?: true
    mentalHealthHistory?: true
    immunizationStatus?: true
    hasPastSurgeries?: true
    recentAnxiety?: true
    recentDepression?: true
    maritalStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatientHealthDataMaxAggregateInputType = {
    id?: true
    patientId?: true
    gender?: true
    dateOfBirth?: true
    bloodGroup?: true
    hasAllergies?: true
    hasDiabetes?: true
    height?: true
    weight?: true
    smokingStatus?: true
    dietaryPreferences?: true
    pregnancyStatus?: true
    mentalHealthHistory?: true
    immunizationStatus?: true
    hasPastSurgeries?: true
    recentAnxiety?: true
    recentDepression?: true
    maritalStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatientHealthDataCountAggregateInputType = {
    id?: true
    patientId?: true
    gender?: true
    dateOfBirth?: true
    bloodGroup?: true
    hasAllergies?: true
    hasDiabetes?: true
    height?: true
    weight?: true
    smokingStatus?: true
    dietaryPreferences?: true
    pregnancyStatus?: true
    mentalHealthHistory?: true
    immunizationStatus?: true
    hasPastSurgeries?: true
    recentAnxiety?: true
    recentDepression?: true
    maritalStatus?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PatientHealthDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PatientHealthData to aggregate.
     */
    where?: PatientHealthDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientHealthData to fetch.
     */
    orderBy?: PatientHealthDataOrderByWithRelationInput | PatientHealthDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientHealthDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientHealthData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientHealthData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PatientHealthData
    **/
    _count?: true | PatientHealthDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientHealthDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientHealthDataMaxAggregateInputType
  }

  export type GetPatientHealthDataAggregateType<T extends PatientHealthDataAggregateArgs> = {
        [P in keyof T & keyof AggregatePatientHealthData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatientHealthData[P]>
      : GetScalarType<T[P], AggregatePatientHealthData[P]>
  }




  export type PatientHealthDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientHealthDataWhereInput
    orderBy?: PatientHealthDataOrderByWithAggregationInput | PatientHealthDataOrderByWithAggregationInput[]
    by: PatientHealthDataScalarFieldEnum[] | PatientHealthDataScalarFieldEnum
    having?: PatientHealthDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientHealthDataCountAggregateInputType | true
    _min?: PatientHealthDataMinAggregateInputType
    _max?: PatientHealthDataMaxAggregateInputType
  }

  export type PatientHealthDataGroupByOutputType = {
    id: string
    patientId: string
    gender: $Enums.Gender
    dateOfBirth: string
    bloodGroup: $Enums.BloodGroup
    hasAllergies: boolean | null
    hasDiabetes: boolean | null
    height: string
    weight: string
    smokingStatus: boolean | null
    dietaryPreferences: string | null
    pregnancyStatus: boolean | null
    mentalHealthHistory: string | null
    immunizationStatus: string | null
    hasPastSurgeries: boolean | null
    recentAnxiety: boolean | null
    recentDepression: boolean | null
    maritalStatus: $Enums.MaritalStatus
    createdAt: Date
    updatedAt: Date
    _count: PatientHealthDataCountAggregateOutputType | null
    _min: PatientHealthDataMinAggregateOutputType | null
    _max: PatientHealthDataMaxAggregateOutputType | null
  }

  type GetPatientHealthDataGroupByPayload<T extends PatientHealthDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientHealthDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientHealthDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientHealthDataGroupByOutputType[P]>
            : GetScalarType<T[P], PatientHealthDataGroupByOutputType[P]>
        }
      >
    >


  export type PatientHealthDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    gender?: boolean
    dateOfBirth?: boolean
    bloodGroup?: boolean
    hasAllergies?: boolean
    hasDiabetes?: boolean
    height?: boolean
    weight?: boolean
    smokingStatus?: boolean
    dietaryPreferences?: boolean
    pregnancyStatus?: boolean
    mentalHealthHistory?: boolean
    immunizationStatus?: boolean
    hasPastSurgeries?: boolean
    recentAnxiety?: boolean
    recentDepression?: boolean
    maritalStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patientHealthData"]>

  export type PatientHealthDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    gender?: boolean
    dateOfBirth?: boolean
    bloodGroup?: boolean
    hasAllergies?: boolean
    hasDiabetes?: boolean
    height?: boolean
    weight?: boolean
    smokingStatus?: boolean
    dietaryPreferences?: boolean
    pregnancyStatus?: boolean
    mentalHealthHistory?: boolean
    immunizationStatus?: boolean
    hasPastSurgeries?: boolean
    recentAnxiety?: boolean
    recentDepression?: boolean
    maritalStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patientHealthData"]>

  export type PatientHealthDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    gender?: boolean
    dateOfBirth?: boolean
    bloodGroup?: boolean
    hasAllergies?: boolean
    hasDiabetes?: boolean
    height?: boolean
    weight?: boolean
    smokingStatus?: boolean
    dietaryPreferences?: boolean
    pregnancyStatus?: boolean
    mentalHealthHistory?: boolean
    immunizationStatus?: boolean
    hasPastSurgeries?: boolean
    recentAnxiety?: boolean
    recentDepression?: boolean
    maritalStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patientHealthData"]>

  export type PatientHealthDataSelectScalar = {
    id?: boolean
    patientId?: boolean
    gender?: boolean
    dateOfBirth?: boolean
    bloodGroup?: boolean
    hasAllergies?: boolean
    hasDiabetes?: boolean
    height?: boolean
    weight?: boolean
    smokingStatus?: boolean
    dietaryPreferences?: boolean
    pregnancyStatus?: boolean
    mentalHealthHistory?: boolean
    immunizationStatus?: boolean
    hasPastSurgeries?: boolean
    recentAnxiety?: boolean
    recentDepression?: boolean
    maritalStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PatientHealthDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientId" | "gender" | "dateOfBirth" | "bloodGroup" | "hasAllergies" | "hasDiabetes" | "height" | "weight" | "smokingStatus" | "dietaryPreferences" | "pregnancyStatus" | "mentalHealthHistory" | "immunizationStatus" | "hasPastSurgeries" | "recentAnxiety" | "recentDepression" | "maritalStatus" | "createdAt" | "updatedAt", ExtArgs["result"]["patientHealthData"]>
  export type PatientHealthDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type PatientHealthDataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type PatientHealthDataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }

  export type $PatientHealthDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PatientHealthData"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      patientId: string
      gender: $Enums.Gender
      dateOfBirth: string
      bloodGroup: $Enums.BloodGroup
      hasAllergies: boolean | null
      hasDiabetes: boolean | null
      height: string
      weight: string
      smokingStatus: boolean | null
      dietaryPreferences: string | null
      pregnancyStatus: boolean | null
      mentalHealthHistory: string | null
      immunizationStatus: string | null
      hasPastSurgeries: boolean | null
      recentAnxiety: boolean | null
      recentDepression: boolean | null
      maritalStatus: $Enums.MaritalStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["patientHealthData"]>
    composites: {}
  }

  type PatientHealthDataGetPayload<S extends boolean | null | undefined | PatientHealthDataDefaultArgs> = $Result.GetResult<Prisma.$PatientHealthDataPayload, S>

  type PatientHealthDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PatientHealthDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatientHealthDataCountAggregateInputType | true
    }

  export interface PatientHealthDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PatientHealthData'], meta: { name: 'PatientHealthData' } }
    /**
     * Find zero or one PatientHealthData that matches the filter.
     * @param {PatientHealthDataFindUniqueArgs} args - Arguments to find a PatientHealthData
     * @example
     * // Get one PatientHealthData
     * const patientHealthData = await prisma.patientHealthData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatientHealthDataFindUniqueArgs>(args: SelectSubset<T, PatientHealthDataFindUniqueArgs<ExtArgs>>): Prisma__PatientHealthDataClient<$Result.GetResult<Prisma.$PatientHealthDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PatientHealthData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PatientHealthDataFindUniqueOrThrowArgs} args - Arguments to find a PatientHealthData
     * @example
     * // Get one PatientHealthData
     * const patientHealthData = await prisma.patientHealthData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatientHealthDataFindUniqueOrThrowArgs>(args: SelectSubset<T, PatientHealthDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatientHealthDataClient<$Result.GetResult<Prisma.$PatientHealthDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PatientHealthData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientHealthDataFindFirstArgs} args - Arguments to find a PatientHealthData
     * @example
     * // Get one PatientHealthData
     * const patientHealthData = await prisma.patientHealthData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatientHealthDataFindFirstArgs>(args?: SelectSubset<T, PatientHealthDataFindFirstArgs<ExtArgs>>): Prisma__PatientHealthDataClient<$Result.GetResult<Prisma.$PatientHealthDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PatientHealthData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientHealthDataFindFirstOrThrowArgs} args - Arguments to find a PatientHealthData
     * @example
     * // Get one PatientHealthData
     * const patientHealthData = await prisma.patientHealthData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatientHealthDataFindFirstOrThrowArgs>(args?: SelectSubset<T, PatientHealthDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatientHealthDataClient<$Result.GetResult<Prisma.$PatientHealthDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PatientHealthData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientHealthDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PatientHealthData
     * const patientHealthData = await prisma.patientHealthData.findMany()
     * 
     * // Get first 10 PatientHealthData
     * const patientHealthData = await prisma.patientHealthData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patientHealthDataWithIdOnly = await prisma.patientHealthData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PatientHealthDataFindManyArgs>(args?: SelectSubset<T, PatientHealthDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientHealthDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PatientHealthData.
     * @param {PatientHealthDataCreateArgs} args - Arguments to create a PatientHealthData.
     * @example
     * // Create one PatientHealthData
     * const PatientHealthData = await prisma.patientHealthData.create({
     *   data: {
     *     // ... data to create a PatientHealthData
     *   }
     * })
     * 
     */
    create<T extends PatientHealthDataCreateArgs>(args: SelectSubset<T, PatientHealthDataCreateArgs<ExtArgs>>): Prisma__PatientHealthDataClient<$Result.GetResult<Prisma.$PatientHealthDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PatientHealthData.
     * @param {PatientHealthDataCreateManyArgs} args - Arguments to create many PatientHealthData.
     * @example
     * // Create many PatientHealthData
     * const patientHealthData = await prisma.patientHealthData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatientHealthDataCreateManyArgs>(args?: SelectSubset<T, PatientHealthDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PatientHealthData and returns the data saved in the database.
     * @param {PatientHealthDataCreateManyAndReturnArgs} args - Arguments to create many PatientHealthData.
     * @example
     * // Create many PatientHealthData
     * const patientHealthData = await prisma.patientHealthData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PatientHealthData and only return the `id`
     * const patientHealthDataWithIdOnly = await prisma.patientHealthData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PatientHealthDataCreateManyAndReturnArgs>(args?: SelectSubset<T, PatientHealthDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientHealthDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PatientHealthData.
     * @param {PatientHealthDataDeleteArgs} args - Arguments to delete one PatientHealthData.
     * @example
     * // Delete one PatientHealthData
     * const PatientHealthData = await prisma.patientHealthData.delete({
     *   where: {
     *     // ... filter to delete one PatientHealthData
     *   }
     * })
     * 
     */
    delete<T extends PatientHealthDataDeleteArgs>(args: SelectSubset<T, PatientHealthDataDeleteArgs<ExtArgs>>): Prisma__PatientHealthDataClient<$Result.GetResult<Prisma.$PatientHealthDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PatientHealthData.
     * @param {PatientHealthDataUpdateArgs} args - Arguments to update one PatientHealthData.
     * @example
     * // Update one PatientHealthData
     * const patientHealthData = await prisma.patientHealthData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatientHealthDataUpdateArgs>(args: SelectSubset<T, PatientHealthDataUpdateArgs<ExtArgs>>): Prisma__PatientHealthDataClient<$Result.GetResult<Prisma.$PatientHealthDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PatientHealthData.
     * @param {PatientHealthDataDeleteManyArgs} args - Arguments to filter PatientHealthData to delete.
     * @example
     * // Delete a few PatientHealthData
     * const { count } = await prisma.patientHealthData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatientHealthDataDeleteManyArgs>(args?: SelectSubset<T, PatientHealthDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PatientHealthData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientHealthDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PatientHealthData
     * const patientHealthData = await prisma.patientHealthData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatientHealthDataUpdateManyArgs>(args: SelectSubset<T, PatientHealthDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PatientHealthData and returns the data updated in the database.
     * @param {PatientHealthDataUpdateManyAndReturnArgs} args - Arguments to update many PatientHealthData.
     * @example
     * // Update many PatientHealthData
     * const patientHealthData = await prisma.patientHealthData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PatientHealthData and only return the `id`
     * const patientHealthDataWithIdOnly = await prisma.patientHealthData.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PatientHealthDataUpdateManyAndReturnArgs>(args: SelectSubset<T, PatientHealthDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientHealthDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PatientHealthData.
     * @param {PatientHealthDataUpsertArgs} args - Arguments to update or create a PatientHealthData.
     * @example
     * // Update or create a PatientHealthData
     * const patientHealthData = await prisma.patientHealthData.upsert({
     *   create: {
     *     // ... data to create a PatientHealthData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PatientHealthData we want to update
     *   }
     * })
     */
    upsert<T extends PatientHealthDataUpsertArgs>(args: SelectSubset<T, PatientHealthDataUpsertArgs<ExtArgs>>): Prisma__PatientHealthDataClient<$Result.GetResult<Prisma.$PatientHealthDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PatientHealthData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientHealthDataCountArgs} args - Arguments to filter PatientHealthData to count.
     * @example
     * // Count the number of PatientHealthData
     * const count = await prisma.patientHealthData.count({
     *   where: {
     *     // ... the filter for the PatientHealthData we want to count
     *   }
     * })
    **/
    count<T extends PatientHealthDataCountArgs>(
      args?: Subset<T, PatientHealthDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientHealthDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PatientHealthData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientHealthDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PatientHealthDataAggregateArgs>(args: Subset<T, PatientHealthDataAggregateArgs>): Prisma.PrismaPromise<GetPatientHealthDataAggregateType<T>>

    /**
     * Group by PatientHealthData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientHealthDataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PatientHealthDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientHealthDataGroupByArgs['orderBy'] }
        : { orderBy?: PatientHealthDataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PatientHealthDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientHealthDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PatientHealthData model
   */
  readonly fields: PatientHealthDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PatientHealthData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientHealthDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PatientHealthData model
   */
  interface PatientHealthDataFieldRefs {
    readonly id: FieldRef<"PatientHealthData", 'String'>
    readonly patientId: FieldRef<"PatientHealthData", 'String'>
    readonly gender: FieldRef<"PatientHealthData", 'Gender'>
    readonly dateOfBirth: FieldRef<"PatientHealthData", 'String'>
    readonly bloodGroup: FieldRef<"PatientHealthData", 'BloodGroup'>
    readonly hasAllergies: FieldRef<"PatientHealthData", 'Boolean'>
    readonly hasDiabetes: FieldRef<"PatientHealthData", 'Boolean'>
    readonly height: FieldRef<"PatientHealthData", 'String'>
    readonly weight: FieldRef<"PatientHealthData", 'String'>
    readonly smokingStatus: FieldRef<"PatientHealthData", 'Boolean'>
    readonly dietaryPreferences: FieldRef<"PatientHealthData", 'String'>
    readonly pregnancyStatus: FieldRef<"PatientHealthData", 'Boolean'>
    readonly mentalHealthHistory: FieldRef<"PatientHealthData", 'String'>
    readonly immunizationStatus: FieldRef<"PatientHealthData", 'String'>
    readonly hasPastSurgeries: FieldRef<"PatientHealthData", 'Boolean'>
    readonly recentAnxiety: FieldRef<"PatientHealthData", 'Boolean'>
    readonly recentDepression: FieldRef<"PatientHealthData", 'Boolean'>
    readonly maritalStatus: FieldRef<"PatientHealthData", 'MaritalStatus'>
    readonly createdAt: FieldRef<"PatientHealthData", 'DateTime'>
    readonly updatedAt: FieldRef<"PatientHealthData", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PatientHealthData findUnique
   */
  export type PatientHealthDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientHealthData
     */
    select?: PatientHealthDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientHealthData
     */
    omit?: PatientHealthDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientHealthDataInclude<ExtArgs> | null
    /**
     * Filter, which PatientHealthData to fetch.
     */
    where: PatientHealthDataWhereUniqueInput
  }

  /**
   * PatientHealthData findUniqueOrThrow
   */
  export type PatientHealthDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientHealthData
     */
    select?: PatientHealthDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientHealthData
     */
    omit?: PatientHealthDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientHealthDataInclude<ExtArgs> | null
    /**
     * Filter, which PatientHealthData to fetch.
     */
    where: PatientHealthDataWhereUniqueInput
  }

  /**
   * PatientHealthData findFirst
   */
  export type PatientHealthDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientHealthData
     */
    select?: PatientHealthDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientHealthData
     */
    omit?: PatientHealthDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientHealthDataInclude<ExtArgs> | null
    /**
     * Filter, which PatientHealthData to fetch.
     */
    where?: PatientHealthDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientHealthData to fetch.
     */
    orderBy?: PatientHealthDataOrderByWithRelationInput | PatientHealthDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PatientHealthData.
     */
    cursor?: PatientHealthDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientHealthData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientHealthData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PatientHealthData.
     */
    distinct?: PatientHealthDataScalarFieldEnum | PatientHealthDataScalarFieldEnum[]
  }

  /**
   * PatientHealthData findFirstOrThrow
   */
  export type PatientHealthDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientHealthData
     */
    select?: PatientHealthDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientHealthData
     */
    omit?: PatientHealthDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientHealthDataInclude<ExtArgs> | null
    /**
     * Filter, which PatientHealthData to fetch.
     */
    where?: PatientHealthDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientHealthData to fetch.
     */
    orderBy?: PatientHealthDataOrderByWithRelationInput | PatientHealthDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PatientHealthData.
     */
    cursor?: PatientHealthDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientHealthData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientHealthData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PatientHealthData.
     */
    distinct?: PatientHealthDataScalarFieldEnum | PatientHealthDataScalarFieldEnum[]
  }

  /**
   * PatientHealthData findMany
   */
  export type PatientHealthDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientHealthData
     */
    select?: PatientHealthDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientHealthData
     */
    omit?: PatientHealthDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientHealthDataInclude<ExtArgs> | null
    /**
     * Filter, which PatientHealthData to fetch.
     */
    where?: PatientHealthDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientHealthData to fetch.
     */
    orderBy?: PatientHealthDataOrderByWithRelationInput | PatientHealthDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PatientHealthData.
     */
    cursor?: PatientHealthDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientHealthData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientHealthData.
     */
    skip?: number
    distinct?: PatientHealthDataScalarFieldEnum | PatientHealthDataScalarFieldEnum[]
  }

  /**
   * PatientHealthData create
   */
  export type PatientHealthDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientHealthData
     */
    select?: PatientHealthDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientHealthData
     */
    omit?: PatientHealthDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientHealthDataInclude<ExtArgs> | null
    /**
     * The data needed to create a PatientHealthData.
     */
    data: XOR<PatientHealthDataCreateInput, PatientHealthDataUncheckedCreateInput>
  }

  /**
   * PatientHealthData createMany
   */
  export type PatientHealthDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PatientHealthData.
     */
    data: PatientHealthDataCreateManyInput | PatientHealthDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PatientHealthData createManyAndReturn
   */
  export type PatientHealthDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientHealthData
     */
    select?: PatientHealthDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PatientHealthData
     */
    omit?: PatientHealthDataOmit<ExtArgs> | null
    /**
     * The data used to create many PatientHealthData.
     */
    data: PatientHealthDataCreateManyInput | PatientHealthDataCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientHealthDataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PatientHealthData update
   */
  export type PatientHealthDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientHealthData
     */
    select?: PatientHealthDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientHealthData
     */
    omit?: PatientHealthDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientHealthDataInclude<ExtArgs> | null
    /**
     * The data needed to update a PatientHealthData.
     */
    data: XOR<PatientHealthDataUpdateInput, PatientHealthDataUncheckedUpdateInput>
    /**
     * Choose, which PatientHealthData to update.
     */
    where: PatientHealthDataWhereUniqueInput
  }

  /**
   * PatientHealthData updateMany
   */
  export type PatientHealthDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PatientHealthData.
     */
    data: XOR<PatientHealthDataUpdateManyMutationInput, PatientHealthDataUncheckedUpdateManyInput>
    /**
     * Filter which PatientHealthData to update
     */
    where?: PatientHealthDataWhereInput
    /**
     * Limit how many PatientHealthData to update.
     */
    limit?: number
  }

  /**
   * PatientHealthData updateManyAndReturn
   */
  export type PatientHealthDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientHealthData
     */
    select?: PatientHealthDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PatientHealthData
     */
    omit?: PatientHealthDataOmit<ExtArgs> | null
    /**
     * The data used to update PatientHealthData.
     */
    data: XOR<PatientHealthDataUpdateManyMutationInput, PatientHealthDataUncheckedUpdateManyInput>
    /**
     * Filter which PatientHealthData to update
     */
    where?: PatientHealthDataWhereInput
    /**
     * Limit how many PatientHealthData to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientHealthDataIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PatientHealthData upsert
   */
  export type PatientHealthDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientHealthData
     */
    select?: PatientHealthDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientHealthData
     */
    omit?: PatientHealthDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientHealthDataInclude<ExtArgs> | null
    /**
     * The filter to search for the PatientHealthData to update in case it exists.
     */
    where: PatientHealthDataWhereUniqueInput
    /**
     * In case the PatientHealthData found by the `where` argument doesn't exist, create a new PatientHealthData with this data.
     */
    create: XOR<PatientHealthDataCreateInput, PatientHealthDataUncheckedCreateInput>
    /**
     * In case the PatientHealthData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientHealthDataUpdateInput, PatientHealthDataUncheckedUpdateInput>
  }

  /**
   * PatientHealthData delete
   */
  export type PatientHealthDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientHealthData
     */
    select?: PatientHealthDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientHealthData
     */
    omit?: PatientHealthDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientHealthDataInclude<ExtArgs> | null
    /**
     * Filter which PatientHealthData to delete.
     */
    where: PatientHealthDataWhereUniqueInput
  }

  /**
   * PatientHealthData deleteMany
   */
  export type PatientHealthDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PatientHealthData to delete
     */
    where?: PatientHealthDataWhereInput
    /**
     * Limit how many PatientHealthData to delete.
     */
    limit?: number
  }

  /**
   * PatientHealthData without action
   */
  export type PatientHealthDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientHealthData
     */
    select?: PatientHealthDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientHealthData
     */
    omit?: PatientHealthDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientHealthDataInclude<ExtArgs> | null
  }


  /**
   * Model MedicalReport
   */

  export type AggregateMedicalReport = {
    _count: MedicalReportCountAggregateOutputType | null
    _min: MedicalReportMinAggregateOutputType | null
    _max: MedicalReportMaxAggregateOutputType | null
  }

  export type MedicalReportMinAggregateOutputType = {
    id: string | null
    patientId: string | null
    reportName: string | null
    reportLink: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MedicalReportMaxAggregateOutputType = {
    id: string | null
    patientId: string | null
    reportName: string | null
    reportLink: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MedicalReportCountAggregateOutputType = {
    id: number
    patientId: number
    reportName: number
    reportLink: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MedicalReportMinAggregateInputType = {
    id?: true
    patientId?: true
    reportName?: true
    reportLink?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MedicalReportMaxAggregateInputType = {
    id?: true
    patientId?: true
    reportName?: true
    reportLink?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MedicalReportCountAggregateInputType = {
    id?: true
    patientId?: true
    reportName?: true
    reportLink?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MedicalReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicalReport to aggregate.
     */
    where?: MedicalReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalReports to fetch.
     */
    orderBy?: MedicalReportOrderByWithRelationInput | MedicalReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicalReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MedicalReports
    **/
    _count?: true | MedicalReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicalReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicalReportMaxAggregateInputType
  }

  export type GetMedicalReportAggregateType<T extends MedicalReportAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicalReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicalReport[P]>
      : GetScalarType<T[P], AggregateMedicalReport[P]>
  }




  export type MedicalReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicalReportWhereInput
    orderBy?: MedicalReportOrderByWithAggregationInput | MedicalReportOrderByWithAggregationInput[]
    by: MedicalReportScalarFieldEnum[] | MedicalReportScalarFieldEnum
    having?: MedicalReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicalReportCountAggregateInputType | true
    _min?: MedicalReportMinAggregateInputType
    _max?: MedicalReportMaxAggregateInputType
  }

  export type MedicalReportGroupByOutputType = {
    id: string
    patientId: string
    reportName: string
    reportLink: string
    createdAt: Date
    updatedAt: Date
    _count: MedicalReportCountAggregateOutputType | null
    _min: MedicalReportMinAggregateOutputType | null
    _max: MedicalReportMaxAggregateOutputType | null
  }

  type GetMedicalReportGroupByPayload<T extends MedicalReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicalReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicalReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicalReportGroupByOutputType[P]>
            : GetScalarType<T[P], MedicalReportGroupByOutputType[P]>
        }
      >
    >


  export type MedicalReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    reportName?: boolean
    reportLink?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicalReport"]>

  export type MedicalReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    reportName?: boolean
    reportLink?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicalReport"]>

  export type MedicalReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    reportName?: boolean
    reportLink?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicalReport"]>

  export type MedicalReportSelectScalar = {
    id?: boolean
    patientId?: boolean
    reportName?: boolean
    reportLink?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MedicalReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientId" | "reportName" | "reportLink" | "createdAt" | "updatedAt", ExtArgs["result"]["medicalReport"]>
  export type MedicalReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type MedicalReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type MedicalReportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }

  export type $MedicalReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MedicalReport"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      patientId: string
      reportName: string
      reportLink: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["medicalReport"]>
    composites: {}
  }

  type MedicalReportGetPayload<S extends boolean | null | undefined | MedicalReportDefaultArgs> = $Result.GetResult<Prisma.$MedicalReportPayload, S>

  type MedicalReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedicalReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicalReportCountAggregateInputType | true
    }

  export interface MedicalReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MedicalReport'], meta: { name: 'MedicalReport' } }
    /**
     * Find zero or one MedicalReport that matches the filter.
     * @param {MedicalReportFindUniqueArgs} args - Arguments to find a MedicalReport
     * @example
     * // Get one MedicalReport
     * const medicalReport = await prisma.medicalReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicalReportFindUniqueArgs>(args: SelectSubset<T, MedicalReportFindUniqueArgs<ExtArgs>>): Prisma__MedicalReportClient<$Result.GetResult<Prisma.$MedicalReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MedicalReport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicalReportFindUniqueOrThrowArgs} args - Arguments to find a MedicalReport
     * @example
     * // Get one MedicalReport
     * const medicalReport = await prisma.medicalReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicalReportFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicalReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicalReportClient<$Result.GetResult<Prisma.$MedicalReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MedicalReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalReportFindFirstArgs} args - Arguments to find a MedicalReport
     * @example
     * // Get one MedicalReport
     * const medicalReport = await prisma.medicalReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicalReportFindFirstArgs>(args?: SelectSubset<T, MedicalReportFindFirstArgs<ExtArgs>>): Prisma__MedicalReportClient<$Result.GetResult<Prisma.$MedicalReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MedicalReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalReportFindFirstOrThrowArgs} args - Arguments to find a MedicalReport
     * @example
     * // Get one MedicalReport
     * const medicalReport = await prisma.medicalReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicalReportFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicalReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicalReportClient<$Result.GetResult<Prisma.$MedicalReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MedicalReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MedicalReports
     * const medicalReports = await prisma.medicalReport.findMany()
     * 
     * // Get first 10 MedicalReports
     * const medicalReports = await prisma.medicalReport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicalReportWithIdOnly = await prisma.medicalReport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicalReportFindManyArgs>(args?: SelectSubset<T, MedicalReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MedicalReport.
     * @param {MedicalReportCreateArgs} args - Arguments to create a MedicalReport.
     * @example
     * // Create one MedicalReport
     * const MedicalReport = await prisma.medicalReport.create({
     *   data: {
     *     // ... data to create a MedicalReport
     *   }
     * })
     * 
     */
    create<T extends MedicalReportCreateArgs>(args: SelectSubset<T, MedicalReportCreateArgs<ExtArgs>>): Prisma__MedicalReportClient<$Result.GetResult<Prisma.$MedicalReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MedicalReports.
     * @param {MedicalReportCreateManyArgs} args - Arguments to create many MedicalReports.
     * @example
     * // Create many MedicalReports
     * const medicalReport = await prisma.medicalReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicalReportCreateManyArgs>(args?: SelectSubset<T, MedicalReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MedicalReports and returns the data saved in the database.
     * @param {MedicalReportCreateManyAndReturnArgs} args - Arguments to create many MedicalReports.
     * @example
     * // Create many MedicalReports
     * const medicalReport = await prisma.medicalReport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MedicalReports and only return the `id`
     * const medicalReportWithIdOnly = await prisma.medicalReport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedicalReportCreateManyAndReturnArgs>(args?: SelectSubset<T, MedicalReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MedicalReport.
     * @param {MedicalReportDeleteArgs} args - Arguments to delete one MedicalReport.
     * @example
     * // Delete one MedicalReport
     * const MedicalReport = await prisma.medicalReport.delete({
     *   where: {
     *     // ... filter to delete one MedicalReport
     *   }
     * })
     * 
     */
    delete<T extends MedicalReportDeleteArgs>(args: SelectSubset<T, MedicalReportDeleteArgs<ExtArgs>>): Prisma__MedicalReportClient<$Result.GetResult<Prisma.$MedicalReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MedicalReport.
     * @param {MedicalReportUpdateArgs} args - Arguments to update one MedicalReport.
     * @example
     * // Update one MedicalReport
     * const medicalReport = await prisma.medicalReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicalReportUpdateArgs>(args: SelectSubset<T, MedicalReportUpdateArgs<ExtArgs>>): Prisma__MedicalReportClient<$Result.GetResult<Prisma.$MedicalReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MedicalReports.
     * @param {MedicalReportDeleteManyArgs} args - Arguments to filter MedicalReports to delete.
     * @example
     * // Delete a few MedicalReports
     * const { count } = await prisma.medicalReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicalReportDeleteManyArgs>(args?: SelectSubset<T, MedicalReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicalReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MedicalReports
     * const medicalReport = await prisma.medicalReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicalReportUpdateManyArgs>(args: SelectSubset<T, MedicalReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicalReports and returns the data updated in the database.
     * @param {MedicalReportUpdateManyAndReturnArgs} args - Arguments to update many MedicalReports.
     * @example
     * // Update many MedicalReports
     * const medicalReport = await prisma.medicalReport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MedicalReports and only return the `id`
     * const medicalReportWithIdOnly = await prisma.medicalReport.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MedicalReportUpdateManyAndReturnArgs>(args: SelectSubset<T, MedicalReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MedicalReport.
     * @param {MedicalReportUpsertArgs} args - Arguments to update or create a MedicalReport.
     * @example
     * // Update or create a MedicalReport
     * const medicalReport = await prisma.medicalReport.upsert({
     *   create: {
     *     // ... data to create a MedicalReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MedicalReport we want to update
     *   }
     * })
     */
    upsert<T extends MedicalReportUpsertArgs>(args: SelectSubset<T, MedicalReportUpsertArgs<ExtArgs>>): Prisma__MedicalReportClient<$Result.GetResult<Prisma.$MedicalReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MedicalReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalReportCountArgs} args - Arguments to filter MedicalReports to count.
     * @example
     * // Count the number of MedicalReports
     * const count = await prisma.medicalReport.count({
     *   where: {
     *     // ... the filter for the MedicalReports we want to count
     *   }
     * })
    **/
    count<T extends MedicalReportCountArgs>(
      args?: Subset<T, MedicalReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicalReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MedicalReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MedicalReportAggregateArgs>(args: Subset<T, MedicalReportAggregateArgs>): Prisma.PrismaPromise<GetMedicalReportAggregateType<T>>

    /**
     * Group by MedicalReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalReportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MedicalReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicalReportGroupByArgs['orderBy'] }
        : { orderBy?: MedicalReportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MedicalReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicalReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MedicalReport model
   */
  readonly fields: MedicalReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MedicalReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicalReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MedicalReport model
   */
  interface MedicalReportFieldRefs {
    readonly id: FieldRef<"MedicalReport", 'String'>
    readonly patientId: FieldRef<"MedicalReport", 'String'>
    readonly reportName: FieldRef<"MedicalReport", 'String'>
    readonly reportLink: FieldRef<"MedicalReport", 'String'>
    readonly createdAt: FieldRef<"MedicalReport", 'DateTime'>
    readonly updatedAt: FieldRef<"MedicalReport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MedicalReport findUnique
   */
  export type MedicalReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalReport
     */
    select?: MedicalReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalReport
     */
    omit?: MedicalReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalReportInclude<ExtArgs> | null
    /**
     * Filter, which MedicalReport to fetch.
     */
    where: MedicalReportWhereUniqueInput
  }

  /**
   * MedicalReport findUniqueOrThrow
   */
  export type MedicalReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalReport
     */
    select?: MedicalReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalReport
     */
    omit?: MedicalReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalReportInclude<ExtArgs> | null
    /**
     * Filter, which MedicalReport to fetch.
     */
    where: MedicalReportWhereUniqueInput
  }

  /**
   * MedicalReport findFirst
   */
  export type MedicalReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalReport
     */
    select?: MedicalReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalReport
     */
    omit?: MedicalReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalReportInclude<ExtArgs> | null
    /**
     * Filter, which MedicalReport to fetch.
     */
    where?: MedicalReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalReports to fetch.
     */
    orderBy?: MedicalReportOrderByWithRelationInput | MedicalReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicalReports.
     */
    cursor?: MedicalReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicalReports.
     */
    distinct?: MedicalReportScalarFieldEnum | MedicalReportScalarFieldEnum[]
  }

  /**
   * MedicalReport findFirstOrThrow
   */
  export type MedicalReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalReport
     */
    select?: MedicalReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalReport
     */
    omit?: MedicalReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalReportInclude<ExtArgs> | null
    /**
     * Filter, which MedicalReport to fetch.
     */
    where?: MedicalReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalReports to fetch.
     */
    orderBy?: MedicalReportOrderByWithRelationInput | MedicalReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicalReports.
     */
    cursor?: MedicalReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicalReports.
     */
    distinct?: MedicalReportScalarFieldEnum | MedicalReportScalarFieldEnum[]
  }

  /**
   * MedicalReport findMany
   */
  export type MedicalReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalReport
     */
    select?: MedicalReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalReport
     */
    omit?: MedicalReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalReportInclude<ExtArgs> | null
    /**
     * Filter, which MedicalReports to fetch.
     */
    where?: MedicalReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalReports to fetch.
     */
    orderBy?: MedicalReportOrderByWithRelationInput | MedicalReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MedicalReports.
     */
    cursor?: MedicalReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalReports.
     */
    skip?: number
    distinct?: MedicalReportScalarFieldEnum | MedicalReportScalarFieldEnum[]
  }

  /**
   * MedicalReport create
   */
  export type MedicalReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalReport
     */
    select?: MedicalReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalReport
     */
    omit?: MedicalReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalReportInclude<ExtArgs> | null
    /**
     * The data needed to create a MedicalReport.
     */
    data: XOR<MedicalReportCreateInput, MedicalReportUncheckedCreateInput>
  }

  /**
   * MedicalReport createMany
   */
  export type MedicalReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MedicalReports.
     */
    data: MedicalReportCreateManyInput | MedicalReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MedicalReport createManyAndReturn
   */
  export type MedicalReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalReport
     */
    select?: MedicalReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalReport
     */
    omit?: MedicalReportOmit<ExtArgs> | null
    /**
     * The data used to create many MedicalReports.
     */
    data: MedicalReportCreateManyInput | MedicalReportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MedicalReport update
   */
  export type MedicalReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalReport
     */
    select?: MedicalReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalReport
     */
    omit?: MedicalReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalReportInclude<ExtArgs> | null
    /**
     * The data needed to update a MedicalReport.
     */
    data: XOR<MedicalReportUpdateInput, MedicalReportUncheckedUpdateInput>
    /**
     * Choose, which MedicalReport to update.
     */
    where: MedicalReportWhereUniqueInput
  }

  /**
   * MedicalReport updateMany
   */
  export type MedicalReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MedicalReports.
     */
    data: XOR<MedicalReportUpdateManyMutationInput, MedicalReportUncheckedUpdateManyInput>
    /**
     * Filter which MedicalReports to update
     */
    where?: MedicalReportWhereInput
    /**
     * Limit how many MedicalReports to update.
     */
    limit?: number
  }

  /**
   * MedicalReport updateManyAndReturn
   */
  export type MedicalReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalReport
     */
    select?: MedicalReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalReport
     */
    omit?: MedicalReportOmit<ExtArgs> | null
    /**
     * The data used to update MedicalReports.
     */
    data: XOR<MedicalReportUpdateManyMutationInput, MedicalReportUncheckedUpdateManyInput>
    /**
     * Filter which MedicalReports to update
     */
    where?: MedicalReportWhereInput
    /**
     * Limit how many MedicalReports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalReportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MedicalReport upsert
   */
  export type MedicalReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalReport
     */
    select?: MedicalReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalReport
     */
    omit?: MedicalReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalReportInclude<ExtArgs> | null
    /**
     * The filter to search for the MedicalReport to update in case it exists.
     */
    where: MedicalReportWhereUniqueInput
    /**
     * In case the MedicalReport found by the `where` argument doesn't exist, create a new MedicalReport with this data.
     */
    create: XOR<MedicalReportCreateInput, MedicalReportUncheckedCreateInput>
    /**
     * In case the MedicalReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicalReportUpdateInput, MedicalReportUncheckedUpdateInput>
  }

  /**
   * MedicalReport delete
   */
  export type MedicalReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalReport
     */
    select?: MedicalReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalReport
     */
    omit?: MedicalReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalReportInclude<ExtArgs> | null
    /**
     * Filter which MedicalReport to delete.
     */
    where: MedicalReportWhereUniqueInput
  }

  /**
   * MedicalReport deleteMany
   */
  export type MedicalReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicalReports to delete
     */
    where?: MedicalReportWhereInput
    /**
     * Limit how many MedicalReports to delete.
     */
    limit?: number
  }

  /**
   * MedicalReport without action
   */
  export type MedicalReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalReport
     */
    select?: MedicalReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalReport
     */
    omit?: MedicalReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalReportInclude<ExtArgs> | null
  }


  /**
   * Model Schedule
   */

  export type AggregateSchedule = {
    _count: ScheduleCountAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  export type ScheduleMinAggregateOutputType = {
    id: string | null
    startDateTime: Date | null
    endDateTime: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScheduleMaxAggregateOutputType = {
    id: string | null
    startDateTime: Date | null
    endDateTime: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScheduleCountAggregateOutputType = {
    id: number
    startDateTime: number
    endDateTime: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ScheduleMinAggregateInputType = {
    id?: true
    startDateTime?: true
    endDateTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScheduleMaxAggregateInputType = {
    id?: true
    startDateTime?: true
    endDateTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScheduleCountAggregateInputType = {
    id?: true
    startDateTime?: true
    endDateTime?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedule to aggregate.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schedules
    **/
    _count?: true | ScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScheduleMaxAggregateInputType
  }

  export type GetScheduleAggregateType<T extends ScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchedule[P]>
      : GetScalarType<T[P], AggregateSchedule[P]>
  }




  export type ScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleWhereInput
    orderBy?: ScheduleOrderByWithAggregationInput | ScheduleOrderByWithAggregationInput[]
    by: ScheduleScalarFieldEnum[] | ScheduleScalarFieldEnum
    having?: ScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScheduleCountAggregateInputType | true
    _min?: ScheduleMinAggregateInputType
    _max?: ScheduleMaxAggregateInputType
  }

  export type ScheduleGroupByOutputType = {
    id: string
    startDateTime: Date
    endDateTime: Date
    createdAt: Date
    updatedAt: Date
    _count: ScheduleCountAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  type GetScheduleGroupByPayload<T extends ScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
        }
      >
    >


  export type ScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startDateTime?: boolean
    endDateTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    doctorSchedules?: boolean | Schedule$doctorSchedulesArgs<ExtArgs>
    _count?: boolean | ScheduleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startDateTime?: boolean
    endDateTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startDateTime?: boolean
    endDateTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectScalar = {
    id?: boolean
    startDateTime?: boolean
    endDateTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ScheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "startDateTime" | "endDateTime" | "createdAt" | "updatedAt", ExtArgs["result"]["schedule"]>
  export type ScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctorSchedules?: boolean | Schedule$doctorSchedulesArgs<ExtArgs>
    _count?: boolean | ScheduleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ScheduleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ScheduleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Schedule"
    objects: {
      doctorSchedules: Prisma.$DoctorSchedulesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      startDateTime: Date
      endDateTime: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["schedule"]>
    composites: {}
  }

  type ScheduleGetPayload<S extends boolean | null | undefined | ScheduleDefaultArgs> = $Result.GetResult<Prisma.$SchedulePayload, S>

  type ScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScheduleCountAggregateInputType | true
    }

  export interface ScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Schedule'], meta: { name: 'Schedule' } }
    /**
     * Find zero or one Schedule that matches the filter.
     * @param {ScheduleFindUniqueArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScheduleFindUniqueArgs>(args: SelectSubset<T, ScheduleFindUniqueArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Schedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScheduleFindUniqueOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, ScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindFirstArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScheduleFindFirstArgs>(args?: SelectSubset<T, ScheduleFindFirstArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindFirstOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, ScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schedules
     * const schedules = await prisma.schedule.findMany()
     * 
     * // Get first 10 Schedules
     * const schedules = await prisma.schedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scheduleWithIdOnly = await prisma.schedule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScheduleFindManyArgs>(args?: SelectSubset<T, ScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Schedule.
     * @param {ScheduleCreateArgs} args - Arguments to create a Schedule.
     * @example
     * // Create one Schedule
     * const Schedule = await prisma.schedule.create({
     *   data: {
     *     // ... data to create a Schedule
     *   }
     * })
     * 
     */
    create<T extends ScheduleCreateArgs>(args: SelectSubset<T, ScheduleCreateArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schedules.
     * @param {ScheduleCreateManyArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedule = await prisma.schedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScheduleCreateManyArgs>(args?: SelectSubset<T, ScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Schedules and returns the data saved in the database.
     * @param {ScheduleCreateManyAndReturnArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedule = await prisma.schedule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Schedules and only return the `id`
     * const scheduleWithIdOnly = await prisma.schedule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScheduleCreateManyAndReturnArgs>(args?: SelectSubset<T, ScheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Schedule.
     * @param {ScheduleDeleteArgs} args - Arguments to delete one Schedule.
     * @example
     * // Delete one Schedule
     * const Schedule = await prisma.schedule.delete({
     *   where: {
     *     // ... filter to delete one Schedule
     *   }
     * })
     * 
     */
    delete<T extends ScheduleDeleteArgs>(args: SelectSubset<T, ScheduleDeleteArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Schedule.
     * @param {ScheduleUpdateArgs} args - Arguments to update one Schedule.
     * @example
     * // Update one Schedule
     * const schedule = await prisma.schedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScheduleUpdateArgs>(args: SelectSubset<T, ScheduleUpdateArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schedules.
     * @param {ScheduleDeleteManyArgs} args - Arguments to filter Schedules to delete.
     * @example
     * // Delete a few Schedules
     * const { count } = await prisma.schedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScheduleDeleteManyArgs>(args?: SelectSubset<T, ScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schedules
     * const schedule = await prisma.schedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScheduleUpdateManyArgs>(args: SelectSubset<T, ScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules and returns the data updated in the database.
     * @param {ScheduleUpdateManyAndReturnArgs} args - Arguments to update many Schedules.
     * @example
     * // Update many Schedules
     * const schedule = await prisma.schedule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Schedules and only return the `id`
     * const scheduleWithIdOnly = await prisma.schedule.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ScheduleUpdateManyAndReturnArgs>(args: SelectSubset<T, ScheduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Schedule.
     * @param {ScheduleUpsertArgs} args - Arguments to update or create a Schedule.
     * @example
     * // Update or create a Schedule
     * const schedule = await prisma.schedule.upsert({
     *   create: {
     *     // ... data to create a Schedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Schedule we want to update
     *   }
     * })
     */
    upsert<T extends ScheduleUpsertArgs>(args: SelectSubset<T, ScheduleUpsertArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleCountArgs} args - Arguments to filter Schedules to count.
     * @example
     * // Count the number of Schedules
     * const count = await prisma.schedule.count({
     *   where: {
     *     // ... the filter for the Schedules we want to count
     *   }
     * })
    **/
    count<T extends ScheduleCountArgs>(
      args?: Subset<T, ScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScheduleAggregateArgs>(args: Subset<T, ScheduleAggregateArgs>): Prisma.PrismaPromise<GetScheduleAggregateType<T>>

    /**
     * Group by Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScheduleGroupByArgs['orderBy'] }
        : { orderBy?: ScheduleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Schedule model
   */
  readonly fields: ScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Schedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctorSchedules<T extends Schedule$doctorSchedulesArgs<ExtArgs> = {}>(args?: Subset<T, Schedule$doctorSchedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorSchedulesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Schedule model
   */
  interface ScheduleFieldRefs {
    readonly id: FieldRef<"Schedule", 'String'>
    readonly startDateTime: FieldRef<"Schedule", 'DateTime'>
    readonly endDateTime: FieldRef<"Schedule", 'DateTime'>
    readonly createdAt: FieldRef<"Schedule", 'DateTime'>
    readonly updatedAt: FieldRef<"Schedule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Schedule findUnique
   */
  export type ScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule findUniqueOrThrow
   */
  export type ScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule findFirst
   */
  export type ScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule findFirstOrThrow
   */
  export type ScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule findMany
   */
  export type ScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedules to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule create
   */
  export type ScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a Schedule.
     */
    data: XOR<ScheduleCreateInput, ScheduleUncheckedCreateInput>
  }

  /**
   * Schedule createMany
   */
  export type ScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schedules.
     */
    data: ScheduleCreateManyInput | ScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Schedule createManyAndReturn
   */
  export type ScheduleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * The data used to create many Schedules.
     */
    data: ScheduleCreateManyInput | ScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Schedule update
   */
  export type ScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a Schedule.
     */
    data: XOR<ScheduleUpdateInput, ScheduleUncheckedUpdateInput>
    /**
     * Choose, which Schedule to update.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule updateMany
   */
  export type ScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Schedules.
     */
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyInput>
    /**
     * Filter which Schedules to update
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to update.
     */
    limit?: number
  }

  /**
   * Schedule updateManyAndReturn
   */
  export type ScheduleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * The data used to update Schedules.
     */
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyInput>
    /**
     * Filter which Schedules to update
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to update.
     */
    limit?: number
  }

  /**
   * Schedule upsert
   */
  export type ScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the Schedule to update in case it exists.
     */
    where: ScheduleWhereUniqueInput
    /**
     * In case the Schedule found by the `where` argument doesn't exist, create a new Schedule with this data.
     */
    create: XOR<ScheduleCreateInput, ScheduleUncheckedCreateInput>
    /**
     * In case the Schedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScheduleUpdateInput, ScheduleUncheckedUpdateInput>
  }

  /**
   * Schedule delete
   */
  export type ScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter which Schedule to delete.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule deleteMany
   */
  export type ScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedules to delete
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to delete.
     */
    limit?: number
  }

  /**
   * Schedule.doctorSchedules
   */
  export type Schedule$doctorSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSchedules
     */
    select?: DoctorSchedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSchedules
     */
    omit?: DoctorSchedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSchedulesInclude<ExtArgs> | null
    where?: DoctorSchedulesWhereInput
    orderBy?: DoctorSchedulesOrderByWithRelationInput | DoctorSchedulesOrderByWithRelationInput[]
    cursor?: DoctorSchedulesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DoctorSchedulesScalarFieldEnum | DoctorSchedulesScalarFieldEnum[]
  }

  /**
   * Schedule without action
   */
  export type ScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
  }


  /**
   * Model DoctorSchedules
   */

  export type AggregateDoctorSchedules = {
    _count: DoctorSchedulesCountAggregateOutputType | null
    _min: DoctorSchedulesMinAggregateOutputType | null
    _max: DoctorSchedulesMaxAggregateOutputType | null
  }

  export type DoctorSchedulesMinAggregateOutputType = {
    doctorId: string | null
    scheduleId: string | null
    isBooked: boolean | null
    appointmentId: string | null
  }

  export type DoctorSchedulesMaxAggregateOutputType = {
    doctorId: string | null
    scheduleId: string | null
    isBooked: boolean | null
    appointmentId: string | null
  }

  export type DoctorSchedulesCountAggregateOutputType = {
    doctorId: number
    scheduleId: number
    isBooked: number
    appointmentId: number
    _all: number
  }


  export type DoctorSchedulesMinAggregateInputType = {
    doctorId?: true
    scheduleId?: true
    isBooked?: true
    appointmentId?: true
  }

  export type DoctorSchedulesMaxAggregateInputType = {
    doctorId?: true
    scheduleId?: true
    isBooked?: true
    appointmentId?: true
  }

  export type DoctorSchedulesCountAggregateInputType = {
    doctorId?: true
    scheduleId?: true
    isBooked?: true
    appointmentId?: true
    _all?: true
  }

  export type DoctorSchedulesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoctorSchedules to aggregate.
     */
    where?: DoctorSchedulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorSchedules to fetch.
     */
    orderBy?: DoctorSchedulesOrderByWithRelationInput | DoctorSchedulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoctorSchedulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DoctorSchedules
    **/
    _count?: true | DoctorSchedulesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorSchedulesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorSchedulesMaxAggregateInputType
  }

  export type GetDoctorSchedulesAggregateType<T extends DoctorSchedulesAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctorSchedules]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctorSchedules[P]>
      : GetScalarType<T[P], AggregateDoctorSchedules[P]>
  }




  export type DoctorSchedulesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorSchedulesWhereInput
    orderBy?: DoctorSchedulesOrderByWithAggregationInput | DoctorSchedulesOrderByWithAggregationInput[]
    by: DoctorSchedulesScalarFieldEnum[] | DoctorSchedulesScalarFieldEnum
    having?: DoctorSchedulesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorSchedulesCountAggregateInputType | true
    _min?: DoctorSchedulesMinAggregateInputType
    _max?: DoctorSchedulesMaxAggregateInputType
  }

  export type DoctorSchedulesGroupByOutputType = {
    doctorId: string
    scheduleId: string
    isBooked: boolean
    appointmentId: string | null
    _count: DoctorSchedulesCountAggregateOutputType | null
    _min: DoctorSchedulesMinAggregateOutputType | null
    _max: DoctorSchedulesMaxAggregateOutputType | null
  }

  type GetDoctorSchedulesGroupByPayload<T extends DoctorSchedulesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoctorSchedulesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorSchedulesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorSchedulesGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorSchedulesGroupByOutputType[P]>
        }
      >
    >


  export type DoctorSchedulesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    doctorId?: boolean
    scheduleId?: boolean
    isBooked?: boolean
    appointmentId?: boolean
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctorSchedules"]>

  export type DoctorSchedulesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    doctorId?: boolean
    scheduleId?: boolean
    isBooked?: boolean
    appointmentId?: boolean
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctorSchedules"]>

  export type DoctorSchedulesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    doctorId?: boolean
    scheduleId?: boolean
    isBooked?: boolean
    appointmentId?: boolean
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctorSchedules"]>

  export type DoctorSchedulesSelectScalar = {
    doctorId?: boolean
    scheduleId?: boolean
    isBooked?: boolean
    appointmentId?: boolean
  }

  export type DoctorSchedulesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"doctorId" | "scheduleId" | "isBooked" | "appointmentId", ExtArgs["result"]["doctorSchedules"]>
  export type DoctorSchedulesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
  }
  export type DoctorSchedulesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
  }
  export type DoctorSchedulesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
  }

  export type $DoctorSchedulesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DoctorSchedules"
    objects: {
      doctor: Prisma.$DoctorPayload<ExtArgs>
      schedule: Prisma.$SchedulePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      doctorId: string
      scheduleId: string
      isBooked: boolean
      appointmentId: string | null
    }, ExtArgs["result"]["doctorSchedules"]>
    composites: {}
  }

  type DoctorSchedulesGetPayload<S extends boolean | null | undefined | DoctorSchedulesDefaultArgs> = $Result.GetResult<Prisma.$DoctorSchedulesPayload, S>

  type DoctorSchedulesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DoctorSchedulesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoctorSchedulesCountAggregateInputType | true
    }

  export interface DoctorSchedulesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DoctorSchedules'], meta: { name: 'DoctorSchedules' } }
    /**
     * Find zero or one DoctorSchedules that matches the filter.
     * @param {DoctorSchedulesFindUniqueArgs} args - Arguments to find a DoctorSchedules
     * @example
     * // Get one DoctorSchedules
     * const doctorSchedules = await prisma.doctorSchedules.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DoctorSchedulesFindUniqueArgs>(args: SelectSubset<T, DoctorSchedulesFindUniqueArgs<ExtArgs>>): Prisma__DoctorSchedulesClient<$Result.GetResult<Prisma.$DoctorSchedulesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DoctorSchedules that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DoctorSchedulesFindUniqueOrThrowArgs} args - Arguments to find a DoctorSchedules
     * @example
     * // Get one DoctorSchedules
     * const doctorSchedules = await prisma.doctorSchedules.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DoctorSchedulesFindUniqueOrThrowArgs>(args: SelectSubset<T, DoctorSchedulesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DoctorSchedulesClient<$Result.GetResult<Prisma.$DoctorSchedulesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DoctorSchedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSchedulesFindFirstArgs} args - Arguments to find a DoctorSchedules
     * @example
     * // Get one DoctorSchedules
     * const doctorSchedules = await prisma.doctorSchedules.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DoctorSchedulesFindFirstArgs>(args?: SelectSubset<T, DoctorSchedulesFindFirstArgs<ExtArgs>>): Prisma__DoctorSchedulesClient<$Result.GetResult<Prisma.$DoctorSchedulesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DoctorSchedules that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSchedulesFindFirstOrThrowArgs} args - Arguments to find a DoctorSchedules
     * @example
     * // Get one DoctorSchedules
     * const doctorSchedules = await prisma.doctorSchedules.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DoctorSchedulesFindFirstOrThrowArgs>(args?: SelectSubset<T, DoctorSchedulesFindFirstOrThrowArgs<ExtArgs>>): Prisma__DoctorSchedulesClient<$Result.GetResult<Prisma.$DoctorSchedulesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DoctorSchedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSchedulesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DoctorSchedules
     * const doctorSchedules = await prisma.doctorSchedules.findMany()
     * 
     * // Get first 10 DoctorSchedules
     * const doctorSchedules = await prisma.doctorSchedules.findMany({ take: 10 })
     * 
     * // Only select the `doctorId`
     * const doctorSchedulesWithDoctorIdOnly = await prisma.doctorSchedules.findMany({ select: { doctorId: true } })
     * 
     */
    findMany<T extends DoctorSchedulesFindManyArgs>(args?: SelectSubset<T, DoctorSchedulesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorSchedulesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DoctorSchedules.
     * @param {DoctorSchedulesCreateArgs} args - Arguments to create a DoctorSchedules.
     * @example
     * // Create one DoctorSchedules
     * const DoctorSchedules = await prisma.doctorSchedules.create({
     *   data: {
     *     // ... data to create a DoctorSchedules
     *   }
     * })
     * 
     */
    create<T extends DoctorSchedulesCreateArgs>(args: SelectSubset<T, DoctorSchedulesCreateArgs<ExtArgs>>): Prisma__DoctorSchedulesClient<$Result.GetResult<Prisma.$DoctorSchedulesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DoctorSchedules.
     * @param {DoctorSchedulesCreateManyArgs} args - Arguments to create many DoctorSchedules.
     * @example
     * // Create many DoctorSchedules
     * const doctorSchedules = await prisma.doctorSchedules.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DoctorSchedulesCreateManyArgs>(args?: SelectSubset<T, DoctorSchedulesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DoctorSchedules and returns the data saved in the database.
     * @param {DoctorSchedulesCreateManyAndReturnArgs} args - Arguments to create many DoctorSchedules.
     * @example
     * // Create many DoctorSchedules
     * const doctorSchedules = await prisma.doctorSchedules.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DoctorSchedules and only return the `doctorId`
     * const doctorSchedulesWithDoctorIdOnly = await prisma.doctorSchedules.createManyAndReturn({
     *   select: { doctorId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DoctorSchedulesCreateManyAndReturnArgs>(args?: SelectSubset<T, DoctorSchedulesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorSchedulesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DoctorSchedules.
     * @param {DoctorSchedulesDeleteArgs} args - Arguments to delete one DoctorSchedules.
     * @example
     * // Delete one DoctorSchedules
     * const DoctorSchedules = await prisma.doctorSchedules.delete({
     *   where: {
     *     // ... filter to delete one DoctorSchedules
     *   }
     * })
     * 
     */
    delete<T extends DoctorSchedulesDeleteArgs>(args: SelectSubset<T, DoctorSchedulesDeleteArgs<ExtArgs>>): Prisma__DoctorSchedulesClient<$Result.GetResult<Prisma.$DoctorSchedulesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DoctorSchedules.
     * @param {DoctorSchedulesUpdateArgs} args - Arguments to update one DoctorSchedules.
     * @example
     * // Update one DoctorSchedules
     * const doctorSchedules = await prisma.doctorSchedules.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DoctorSchedulesUpdateArgs>(args: SelectSubset<T, DoctorSchedulesUpdateArgs<ExtArgs>>): Prisma__DoctorSchedulesClient<$Result.GetResult<Prisma.$DoctorSchedulesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DoctorSchedules.
     * @param {DoctorSchedulesDeleteManyArgs} args - Arguments to filter DoctorSchedules to delete.
     * @example
     * // Delete a few DoctorSchedules
     * const { count } = await prisma.doctorSchedules.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DoctorSchedulesDeleteManyArgs>(args?: SelectSubset<T, DoctorSchedulesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DoctorSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSchedulesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DoctorSchedules
     * const doctorSchedules = await prisma.doctorSchedules.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DoctorSchedulesUpdateManyArgs>(args: SelectSubset<T, DoctorSchedulesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DoctorSchedules and returns the data updated in the database.
     * @param {DoctorSchedulesUpdateManyAndReturnArgs} args - Arguments to update many DoctorSchedules.
     * @example
     * // Update many DoctorSchedules
     * const doctorSchedules = await prisma.doctorSchedules.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DoctorSchedules and only return the `doctorId`
     * const doctorSchedulesWithDoctorIdOnly = await prisma.doctorSchedules.updateManyAndReturn({
     *   select: { doctorId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DoctorSchedulesUpdateManyAndReturnArgs>(args: SelectSubset<T, DoctorSchedulesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorSchedulesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DoctorSchedules.
     * @param {DoctorSchedulesUpsertArgs} args - Arguments to update or create a DoctorSchedules.
     * @example
     * // Update or create a DoctorSchedules
     * const doctorSchedules = await prisma.doctorSchedules.upsert({
     *   create: {
     *     // ... data to create a DoctorSchedules
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DoctorSchedules we want to update
     *   }
     * })
     */
    upsert<T extends DoctorSchedulesUpsertArgs>(args: SelectSubset<T, DoctorSchedulesUpsertArgs<ExtArgs>>): Prisma__DoctorSchedulesClient<$Result.GetResult<Prisma.$DoctorSchedulesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DoctorSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSchedulesCountArgs} args - Arguments to filter DoctorSchedules to count.
     * @example
     * // Count the number of DoctorSchedules
     * const count = await prisma.doctorSchedules.count({
     *   where: {
     *     // ... the filter for the DoctorSchedules we want to count
     *   }
     * })
    **/
    count<T extends DoctorSchedulesCountArgs>(
      args?: Subset<T, DoctorSchedulesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorSchedulesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DoctorSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSchedulesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DoctorSchedulesAggregateArgs>(args: Subset<T, DoctorSchedulesAggregateArgs>): Prisma.PrismaPromise<GetDoctorSchedulesAggregateType<T>>

    /**
     * Group by DoctorSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSchedulesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DoctorSchedulesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoctorSchedulesGroupByArgs['orderBy'] }
        : { orderBy?: DoctorSchedulesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DoctorSchedulesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorSchedulesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DoctorSchedules model
   */
  readonly fields: DoctorSchedulesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DoctorSchedules.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoctorSchedulesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctor<T extends DoctorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoctorDefaultArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    schedule<T extends ScheduleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScheduleDefaultArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DoctorSchedules model
   */
  interface DoctorSchedulesFieldRefs {
    readonly doctorId: FieldRef<"DoctorSchedules", 'String'>
    readonly scheduleId: FieldRef<"DoctorSchedules", 'String'>
    readonly isBooked: FieldRef<"DoctorSchedules", 'Boolean'>
    readonly appointmentId: FieldRef<"DoctorSchedules", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DoctorSchedules findUnique
   */
  export type DoctorSchedulesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSchedules
     */
    select?: DoctorSchedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSchedules
     */
    omit?: DoctorSchedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSchedulesInclude<ExtArgs> | null
    /**
     * Filter, which DoctorSchedules to fetch.
     */
    where: DoctorSchedulesWhereUniqueInput
  }

  /**
   * DoctorSchedules findUniqueOrThrow
   */
  export type DoctorSchedulesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSchedules
     */
    select?: DoctorSchedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSchedules
     */
    omit?: DoctorSchedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSchedulesInclude<ExtArgs> | null
    /**
     * Filter, which DoctorSchedules to fetch.
     */
    where: DoctorSchedulesWhereUniqueInput
  }

  /**
   * DoctorSchedules findFirst
   */
  export type DoctorSchedulesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSchedules
     */
    select?: DoctorSchedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSchedules
     */
    omit?: DoctorSchedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSchedulesInclude<ExtArgs> | null
    /**
     * Filter, which DoctorSchedules to fetch.
     */
    where?: DoctorSchedulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorSchedules to fetch.
     */
    orderBy?: DoctorSchedulesOrderByWithRelationInput | DoctorSchedulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoctorSchedules.
     */
    cursor?: DoctorSchedulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoctorSchedules.
     */
    distinct?: DoctorSchedulesScalarFieldEnum | DoctorSchedulesScalarFieldEnum[]
  }

  /**
   * DoctorSchedules findFirstOrThrow
   */
  export type DoctorSchedulesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSchedules
     */
    select?: DoctorSchedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSchedules
     */
    omit?: DoctorSchedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSchedulesInclude<ExtArgs> | null
    /**
     * Filter, which DoctorSchedules to fetch.
     */
    where?: DoctorSchedulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorSchedules to fetch.
     */
    orderBy?: DoctorSchedulesOrderByWithRelationInput | DoctorSchedulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoctorSchedules.
     */
    cursor?: DoctorSchedulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoctorSchedules.
     */
    distinct?: DoctorSchedulesScalarFieldEnum | DoctorSchedulesScalarFieldEnum[]
  }

  /**
   * DoctorSchedules findMany
   */
  export type DoctorSchedulesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSchedules
     */
    select?: DoctorSchedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSchedules
     */
    omit?: DoctorSchedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSchedulesInclude<ExtArgs> | null
    /**
     * Filter, which DoctorSchedules to fetch.
     */
    where?: DoctorSchedulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorSchedules to fetch.
     */
    orderBy?: DoctorSchedulesOrderByWithRelationInput | DoctorSchedulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DoctorSchedules.
     */
    cursor?: DoctorSchedulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorSchedules.
     */
    skip?: number
    distinct?: DoctorSchedulesScalarFieldEnum | DoctorSchedulesScalarFieldEnum[]
  }

  /**
   * DoctorSchedules create
   */
  export type DoctorSchedulesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSchedules
     */
    select?: DoctorSchedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSchedules
     */
    omit?: DoctorSchedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSchedulesInclude<ExtArgs> | null
    /**
     * The data needed to create a DoctorSchedules.
     */
    data: XOR<DoctorSchedulesCreateInput, DoctorSchedulesUncheckedCreateInput>
  }

  /**
   * DoctorSchedules createMany
   */
  export type DoctorSchedulesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DoctorSchedules.
     */
    data: DoctorSchedulesCreateManyInput | DoctorSchedulesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DoctorSchedules createManyAndReturn
   */
  export type DoctorSchedulesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSchedules
     */
    select?: DoctorSchedulesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSchedules
     */
    omit?: DoctorSchedulesOmit<ExtArgs> | null
    /**
     * The data used to create many DoctorSchedules.
     */
    data: DoctorSchedulesCreateManyInput | DoctorSchedulesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSchedulesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DoctorSchedules update
   */
  export type DoctorSchedulesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSchedules
     */
    select?: DoctorSchedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSchedules
     */
    omit?: DoctorSchedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSchedulesInclude<ExtArgs> | null
    /**
     * The data needed to update a DoctorSchedules.
     */
    data: XOR<DoctorSchedulesUpdateInput, DoctorSchedulesUncheckedUpdateInput>
    /**
     * Choose, which DoctorSchedules to update.
     */
    where: DoctorSchedulesWhereUniqueInput
  }

  /**
   * DoctorSchedules updateMany
   */
  export type DoctorSchedulesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DoctorSchedules.
     */
    data: XOR<DoctorSchedulesUpdateManyMutationInput, DoctorSchedulesUncheckedUpdateManyInput>
    /**
     * Filter which DoctorSchedules to update
     */
    where?: DoctorSchedulesWhereInput
    /**
     * Limit how many DoctorSchedules to update.
     */
    limit?: number
  }

  /**
   * DoctorSchedules updateManyAndReturn
   */
  export type DoctorSchedulesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSchedules
     */
    select?: DoctorSchedulesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSchedules
     */
    omit?: DoctorSchedulesOmit<ExtArgs> | null
    /**
     * The data used to update DoctorSchedules.
     */
    data: XOR<DoctorSchedulesUpdateManyMutationInput, DoctorSchedulesUncheckedUpdateManyInput>
    /**
     * Filter which DoctorSchedules to update
     */
    where?: DoctorSchedulesWhereInput
    /**
     * Limit how many DoctorSchedules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSchedulesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DoctorSchedules upsert
   */
  export type DoctorSchedulesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSchedules
     */
    select?: DoctorSchedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSchedules
     */
    omit?: DoctorSchedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSchedulesInclude<ExtArgs> | null
    /**
     * The filter to search for the DoctorSchedules to update in case it exists.
     */
    where: DoctorSchedulesWhereUniqueInput
    /**
     * In case the DoctorSchedules found by the `where` argument doesn't exist, create a new DoctorSchedules with this data.
     */
    create: XOR<DoctorSchedulesCreateInput, DoctorSchedulesUncheckedCreateInput>
    /**
     * In case the DoctorSchedules was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoctorSchedulesUpdateInput, DoctorSchedulesUncheckedUpdateInput>
  }

  /**
   * DoctorSchedules delete
   */
  export type DoctorSchedulesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSchedules
     */
    select?: DoctorSchedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSchedules
     */
    omit?: DoctorSchedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSchedulesInclude<ExtArgs> | null
    /**
     * Filter which DoctorSchedules to delete.
     */
    where: DoctorSchedulesWhereUniqueInput
  }

  /**
   * DoctorSchedules deleteMany
   */
  export type DoctorSchedulesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoctorSchedules to delete
     */
    where?: DoctorSchedulesWhereInput
    /**
     * Limit how many DoctorSchedules to delete.
     */
    limit?: number
  }

  /**
   * DoctorSchedules without action
   */
  export type DoctorSchedulesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSchedules
     */
    select?: DoctorSchedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSchedules
     */
    omit?: DoctorSchedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSchedulesInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    role: 'role',
    needPasswordChange: 'needPasswordChange',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    name: 'name',
    profilePhoto: 'profilePhoto',
    contactNumber: 'contactNumber',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    email: 'email'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const DoctorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    profilePhoto: 'profilePhoto',
    contactNumber: 'contactNumber',
    address: 'address',
    registrationNumber: 'registrationNumber',
    experience: 'experience',
    gender: 'gender',
    appointmentFee: 'appointmentFee',
    qualification: 'qualification',
    currentWorkPlace: 'currentWorkPlace',
    designation: 'designation',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    email: 'email'
  };

  export type DoctorScalarFieldEnum = (typeof DoctorScalarFieldEnum)[keyof typeof DoctorScalarFieldEnum]


  export const PatientScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    profilePhoto: 'profilePhoto',
    contactNumber: 'contactNumber',
    address: 'address',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PatientScalarFieldEnum = (typeof PatientScalarFieldEnum)[keyof typeof PatientScalarFieldEnum]


  export const SpecialtiesScalarFieldEnum: {
    id: 'id',
    title: 'title',
    icon: 'icon'
  };

  export type SpecialtiesScalarFieldEnum = (typeof SpecialtiesScalarFieldEnum)[keyof typeof SpecialtiesScalarFieldEnum]


  export const DoctorSpecialtiesScalarFieldEnum: {
    specialtiesId: 'specialtiesId',
    doctorId: 'doctorId'
  };

  export type DoctorSpecialtiesScalarFieldEnum = (typeof DoctorSpecialtiesScalarFieldEnum)[keyof typeof DoctorSpecialtiesScalarFieldEnum]


  export const PatientHealthDataScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    gender: 'gender',
    dateOfBirth: 'dateOfBirth',
    bloodGroup: 'bloodGroup',
    hasAllergies: 'hasAllergies',
    hasDiabetes: 'hasDiabetes',
    height: 'height',
    weight: 'weight',
    smokingStatus: 'smokingStatus',
    dietaryPreferences: 'dietaryPreferences',
    pregnancyStatus: 'pregnancyStatus',
    mentalHealthHistory: 'mentalHealthHistory',
    immunizationStatus: 'immunizationStatus',
    hasPastSurgeries: 'hasPastSurgeries',
    recentAnxiety: 'recentAnxiety',
    recentDepression: 'recentDepression',
    maritalStatus: 'maritalStatus',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PatientHealthDataScalarFieldEnum = (typeof PatientHealthDataScalarFieldEnum)[keyof typeof PatientHealthDataScalarFieldEnum]


  export const MedicalReportScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    reportName: 'reportName',
    reportLink: 'reportLink',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MedicalReportScalarFieldEnum = (typeof MedicalReportScalarFieldEnum)[keyof typeof MedicalReportScalarFieldEnum]


  export const ScheduleScalarFieldEnum: {
    id: 'id',
    startDateTime: 'startDateTime',
    endDateTime: 'endDateTime',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ScheduleScalarFieldEnum = (typeof ScheduleScalarFieldEnum)[keyof typeof ScheduleScalarFieldEnum]


  export const DoctorSchedulesScalarFieldEnum: {
    doctorId: 'doctorId',
    scheduleId: 'scheduleId',
    isBooked: 'isBooked',
    appointmentId: 'appointmentId'
  };

  export type DoctorSchedulesScalarFieldEnum = (typeof DoctorSchedulesScalarFieldEnum)[keyof typeof DoctorSchedulesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'UserStatus[]'
   */
  export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'BloodGroup'
   */
  export type EnumBloodGroupFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BloodGroup'>
    


  /**
   * Reference to a field of type 'BloodGroup[]'
   */
  export type ListEnumBloodGroupFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BloodGroup[]'>
    


  /**
   * Reference to a field of type 'MaritalStatus'
   */
  export type EnumMaritalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MaritalStatus'>
    


  /**
   * Reference to a field of type 'MaritalStatus[]'
   */
  export type ListEnumMaritalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MaritalStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    needPasswordChange?: BoolFilter<"User"> | boolean
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    doctor?: XOR<DoctorNullableScalarRelationFilter, DoctorWhereInput> | null
    patient?: XOR<PatientNullableScalarRelationFilter, PatientWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    needPasswordChange?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    admin?: AdminOrderByWithRelationInput
    doctor?: DoctorOrderByWithRelationInput
    patient?: PatientOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    needPasswordChange?: BoolFilter<"User"> | boolean
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    doctor?: XOR<DoctorNullableScalarRelationFilter, DoctorWhereInput> | null
    patient?: XOR<PatientNullableScalarRelationFilter, PatientWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    needPasswordChange?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    needPasswordChange?: BoolWithAggregatesFilter<"User"> | boolean
    status?: EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: StringFilter<"Admin"> | string
    name?: StringFilter<"Admin"> | string
    profilePhoto?: StringNullableFilter<"Admin"> | string | null
    contactNumber?: StringFilter<"Admin"> | string
    isDeleted?: BoolFilter<"Admin"> | boolean
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
    email?: StringFilter<"Admin"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    profilePhoto?: SortOrderInput | SortOrder
    contactNumber?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    name?: StringFilter<"Admin"> | string
    profilePhoto?: StringNullableFilter<"Admin"> | string | null
    contactNumber?: StringFilter<"Admin"> | string
    isDeleted?: BoolFilter<"Admin"> | boolean
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "email">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    profilePhoto?: SortOrderInput | SortOrder
    contactNumber?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Admin"> | string
    name?: StringWithAggregatesFilter<"Admin"> | string
    profilePhoto?: StringNullableWithAggregatesFilter<"Admin"> | string | null
    contactNumber?: StringWithAggregatesFilter<"Admin"> | string
    isDeleted?: BoolWithAggregatesFilter<"Admin"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    email?: StringWithAggregatesFilter<"Admin"> | string
  }

  export type DoctorWhereInput = {
    AND?: DoctorWhereInput | DoctorWhereInput[]
    OR?: DoctorWhereInput[]
    NOT?: DoctorWhereInput | DoctorWhereInput[]
    id?: StringFilter<"Doctor"> | string
    name?: StringFilter<"Doctor"> | string
    profilePhoto?: StringNullableFilter<"Doctor"> | string | null
    contactNumber?: StringFilter<"Doctor"> | string
    address?: StringNullableFilter<"Doctor"> | string | null
    registrationNumber?: StringFilter<"Doctor"> | string
    experience?: IntFilter<"Doctor"> | number
    gender?: EnumGenderFilter<"Doctor"> | $Enums.Gender
    appointmentFee?: IntFilter<"Doctor"> | number
    qualification?: StringFilter<"Doctor"> | string
    currentWorkPlace?: StringFilter<"Doctor"> | string
    designation?: StringFilter<"Doctor"> | string
    isDeleted?: BoolFilter<"Doctor"> | boolean
    createdAt?: DateTimeFilter<"Doctor"> | Date | string
    updatedAt?: DateTimeFilter<"Doctor"> | Date | string
    email?: StringFilter<"Doctor"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    doctorSpecialties?: DoctorSpecialtiesListRelationFilter
    doctorSchedules?: DoctorSchedulesListRelationFilter
  }

  export type DoctorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    profilePhoto?: SortOrderInput | SortOrder
    contactNumber?: SortOrder
    address?: SortOrderInput | SortOrder
    registrationNumber?: SortOrder
    experience?: SortOrder
    gender?: SortOrder
    appointmentFee?: SortOrder
    qualification?: SortOrder
    currentWorkPlace?: SortOrder
    designation?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    user?: UserOrderByWithRelationInput
    doctorSpecialties?: doctorSpecialtiesOrderByRelationAggregateInput
    doctorSchedules?: DoctorSchedulesOrderByRelationAggregateInput
  }

  export type DoctorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: DoctorWhereInput | DoctorWhereInput[]
    OR?: DoctorWhereInput[]
    NOT?: DoctorWhereInput | DoctorWhereInput[]
    name?: StringFilter<"Doctor"> | string
    profilePhoto?: StringNullableFilter<"Doctor"> | string | null
    contactNumber?: StringFilter<"Doctor"> | string
    address?: StringNullableFilter<"Doctor"> | string | null
    registrationNumber?: StringFilter<"Doctor"> | string
    experience?: IntFilter<"Doctor"> | number
    gender?: EnumGenderFilter<"Doctor"> | $Enums.Gender
    appointmentFee?: IntFilter<"Doctor"> | number
    qualification?: StringFilter<"Doctor"> | string
    currentWorkPlace?: StringFilter<"Doctor"> | string
    designation?: StringFilter<"Doctor"> | string
    isDeleted?: BoolFilter<"Doctor"> | boolean
    createdAt?: DateTimeFilter<"Doctor"> | Date | string
    updatedAt?: DateTimeFilter<"Doctor"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    doctorSpecialties?: DoctorSpecialtiesListRelationFilter
    doctorSchedules?: DoctorSchedulesListRelationFilter
  }, "id" | "email">

  export type DoctorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    profilePhoto?: SortOrderInput | SortOrder
    contactNumber?: SortOrder
    address?: SortOrderInput | SortOrder
    registrationNumber?: SortOrder
    experience?: SortOrder
    gender?: SortOrder
    appointmentFee?: SortOrder
    qualification?: SortOrder
    currentWorkPlace?: SortOrder
    designation?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    _count?: DoctorCountOrderByAggregateInput
    _avg?: DoctorAvgOrderByAggregateInput
    _max?: DoctorMaxOrderByAggregateInput
    _min?: DoctorMinOrderByAggregateInput
    _sum?: DoctorSumOrderByAggregateInput
  }

  export type DoctorScalarWhereWithAggregatesInput = {
    AND?: DoctorScalarWhereWithAggregatesInput | DoctorScalarWhereWithAggregatesInput[]
    OR?: DoctorScalarWhereWithAggregatesInput[]
    NOT?: DoctorScalarWhereWithAggregatesInput | DoctorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Doctor"> | string
    name?: StringWithAggregatesFilter<"Doctor"> | string
    profilePhoto?: StringNullableWithAggregatesFilter<"Doctor"> | string | null
    contactNumber?: StringWithAggregatesFilter<"Doctor"> | string
    address?: StringNullableWithAggregatesFilter<"Doctor"> | string | null
    registrationNumber?: StringWithAggregatesFilter<"Doctor"> | string
    experience?: IntWithAggregatesFilter<"Doctor"> | number
    gender?: EnumGenderWithAggregatesFilter<"Doctor"> | $Enums.Gender
    appointmentFee?: IntWithAggregatesFilter<"Doctor"> | number
    qualification?: StringWithAggregatesFilter<"Doctor"> | string
    currentWorkPlace?: StringWithAggregatesFilter<"Doctor"> | string
    designation?: StringWithAggregatesFilter<"Doctor"> | string
    isDeleted?: BoolWithAggregatesFilter<"Doctor"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Doctor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Doctor"> | Date | string
    email?: StringWithAggregatesFilter<"Doctor"> | string
  }

  export type PatientWhereInput = {
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    id?: StringFilter<"Patient"> | string
    email?: StringFilter<"Patient"> | string
    name?: StringFilter<"Patient"> | string
    profilePhoto?: StringNullableFilter<"Patient"> | string | null
    contactNumber?: StringNullableFilter<"Patient"> | string | null
    address?: StringNullableFilter<"Patient"> | string | null
    isDeleted?: BoolFilter<"Patient"> | boolean
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    updatedAt?: DateTimeFilter<"Patient"> | Date | string
    patientHealthData?: XOR<PatientHealthDataNullableScalarRelationFilter, PatientHealthDataWhereInput> | null
    medicalReports?: MedicalReportListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PatientOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    profilePhoto?: SortOrderInput | SortOrder
    contactNumber?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patientHealthData?: PatientHealthDataOrderByWithRelationInput
    medicalReports?: MedicalReportOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type PatientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    name?: StringFilter<"Patient"> | string
    profilePhoto?: StringNullableFilter<"Patient"> | string | null
    contactNumber?: StringNullableFilter<"Patient"> | string | null
    address?: StringNullableFilter<"Patient"> | string | null
    isDeleted?: BoolFilter<"Patient"> | boolean
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    updatedAt?: DateTimeFilter<"Patient"> | Date | string
    patientHealthData?: XOR<PatientHealthDataNullableScalarRelationFilter, PatientHealthDataWhereInput> | null
    medicalReports?: MedicalReportListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "id" | "email">

  export type PatientOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    profilePhoto?: SortOrderInput | SortOrder
    contactNumber?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PatientCountOrderByAggregateInput
    _max?: PatientMaxOrderByAggregateInput
    _min?: PatientMinOrderByAggregateInput
  }

  export type PatientScalarWhereWithAggregatesInput = {
    AND?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    OR?: PatientScalarWhereWithAggregatesInput[]
    NOT?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Patient"> | string
    email?: StringWithAggregatesFilter<"Patient"> | string
    name?: StringWithAggregatesFilter<"Patient"> | string
    profilePhoto?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    contactNumber?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    address?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    isDeleted?: BoolWithAggregatesFilter<"Patient"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
  }

  export type SpecialtiesWhereInput = {
    AND?: SpecialtiesWhereInput | SpecialtiesWhereInput[]
    OR?: SpecialtiesWhereInput[]
    NOT?: SpecialtiesWhereInput | SpecialtiesWhereInput[]
    id?: StringFilter<"Specialties"> | string
    title?: StringFilter<"Specialties"> | string
    icon?: StringFilter<"Specialties"> | string
    doctorSpecialties?: DoctorSpecialtiesListRelationFilter
  }

  export type SpecialtiesOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    icon?: SortOrder
    doctorSpecialties?: doctorSpecialtiesOrderByRelationAggregateInput
  }

  export type SpecialtiesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    title?: string
    AND?: SpecialtiesWhereInput | SpecialtiesWhereInput[]
    OR?: SpecialtiesWhereInput[]
    NOT?: SpecialtiesWhereInput | SpecialtiesWhereInput[]
    icon?: StringFilter<"Specialties"> | string
    doctorSpecialties?: DoctorSpecialtiesListRelationFilter
  }, "id" | "title">

  export type SpecialtiesOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    icon?: SortOrder
    _count?: SpecialtiesCountOrderByAggregateInput
    _max?: SpecialtiesMaxOrderByAggregateInput
    _min?: SpecialtiesMinOrderByAggregateInput
  }

  export type SpecialtiesScalarWhereWithAggregatesInput = {
    AND?: SpecialtiesScalarWhereWithAggregatesInput | SpecialtiesScalarWhereWithAggregatesInput[]
    OR?: SpecialtiesScalarWhereWithAggregatesInput[]
    NOT?: SpecialtiesScalarWhereWithAggregatesInput | SpecialtiesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Specialties"> | string
    title?: StringWithAggregatesFilter<"Specialties"> | string
    icon?: StringWithAggregatesFilter<"Specialties"> | string
  }

  export type doctorSpecialtiesWhereInput = {
    AND?: doctorSpecialtiesWhereInput | doctorSpecialtiesWhereInput[]
    OR?: doctorSpecialtiesWhereInput[]
    NOT?: doctorSpecialtiesWhereInput | doctorSpecialtiesWhereInput[]
    specialtiesId?: StringFilter<"doctorSpecialties"> | string
    doctorId?: StringFilter<"doctorSpecialties"> | string
    specialties?: XOR<SpecialtiesScalarRelationFilter, SpecialtiesWhereInput>
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
  }

  export type doctorSpecialtiesOrderByWithRelationInput = {
    specialtiesId?: SortOrder
    doctorId?: SortOrder
    specialties?: SpecialtiesOrderByWithRelationInput
    doctor?: DoctorOrderByWithRelationInput
  }

  export type doctorSpecialtiesWhereUniqueInput = Prisma.AtLeast<{
    specialtiesId_doctorId?: doctorSpecialtiesSpecialtiesIdDoctorIdCompoundUniqueInput
    AND?: doctorSpecialtiesWhereInput | doctorSpecialtiesWhereInput[]
    OR?: doctorSpecialtiesWhereInput[]
    NOT?: doctorSpecialtiesWhereInput | doctorSpecialtiesWhereInput[]
    specialtiesId?: StringFilter<"doctorSpecialties"> | string
    doctorId?: StringFilter<"doctorSpecialties"> | string
    specialties?: XOR<SpecialtiesScalarRelationFilter, SpecialtiesWhereInput>
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
  }, "specialtiesId_doctorId">

  export type doctorSpecialtiesOrderByWithAggregationInput = {
    specialtiesId?: SortOrder
    doctorId?: SortOrder
    _count?: doctorSpecialtiesCountOrderByAggregateInput
    _max?: doctorSpecialtiesMaxOrderByAggregateInput
    _min?: doctorSpecialtiesMinOrderByAggregateInput
  }

  export type doctorSpecialtiesScalarWhereWithAggregatesInput = {
    AND?: doctorSpecialtiesScalarWhereWithAggregatesInput | doctorSpecialtiesScalarWhereWithAggregatesInput[]
    OR?: doctorSpecialtiesScalarWhereWithAggregatesInput[]
    NOT?: doctorSpecialtiesScalarWhereWithAggregatesInput | doctorSpecialtiesScalarWhereWithAggregatesInput[]
    specialtiesId?: StringWithAggregatesFilter<"doctorSpecialties"> | string
    doctorId?: StringWithAggregatesFilter<"doctorSpecialties"> | string
  }

  export type PatientHealthDataWhereInput = {
    AND?: PatientHealthDataWhereInput | PatientHealthDataWhereInput[]
    OR?: PatientHealthDataWhereInput[]
    NOT?: PatientHealthDataWhereInput | PatientHealthDataWhereInput[]
    id?: StringFilter<"PatientHealthData"> | string
    patientId?: StringFilter<"PatientHealthData"> | string
    gender?: EnumGenderFilter<"PatientHealthData"> | $Enums.Gender
    dateOfBirth?: StringFilter<"PatientHealthData"> | string
    bloodGroup?: EnumBloodGroupFilter<"PatientHealthData"> | $Enums.BloodGroup
    hasAllergies?: BoolNullableFilter<"PatientHealthData"> | boolean | null
    hasDiabetes?: BoolNullableFilter<"PatientHealthData"> | boolean | null
    height?: StringFilter<"PatientHealthData"> | string
    weight?: StringFilter<"PatientHealthData"> | string
    smokingStatus?: BoolNullableFilter<"PatientHealthData"> | boolean | null
    dietaryPreferences?: StringNullableFilter<"PatientHealthData"> | string | null
    pregnancyStatus?: BoolNullableFilter<"PatientHealthData"> | boolean | null
    mentalHealthHistory?: StringNullableFilter<"PatientHealthData"> | string | null
    immunizationStatus?: StringNullableFilter<"PatientHealthData"> | string | null
    hasPastSurgeries?: BoolNullableFilter<"PatientHealthData"> | boolean | null
    recentAnxiety?: BoolNullableFilter<"PatientHealthData"> | boolean | null
    recentDepression?: BoolNullableFilter<"PatientHealthData"> | boolean | null
    maritalStatus?: EnumMaritalStatusFilter<"PatientHealthData"> | $Enums.MaritalStatus
    createdAt?: DateTimeFilter<"PatientHealthData"> | Date | string
    updatedAt?: DateTimeFilter<"PatientHealthData"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }

  export type PatientHealthDataOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    gender?: SortOrder
    dateOfBirth?: SortOrder
    bloodGroup?: SortOrder
    hasAllergies?: SortOrderInput | SortOrder
    hasDiabetes?: SortOrderInput | SortOrder
    height?: SortOrder
    weight?: SortOrder
    smokingStatus?: SortOrderInput | SortOrder
    dietaryPreferences?: SortOrderInput | SortOrder
    pregnancyStatus?: SortOrderInput | SortOrder
    mentalHealthHistory?: SortOrderInput | SortOrder
    immunizationStatus?: SortOrderInput | SortOrder
    hasPastSurgeries?: SortOrderInput | SortOrder
    recentAnxiety?: SortOrderInput | SortOrder
    recentDepression?: SortOrderInput | SortOrder
    maritalStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patient?: PatientOrderByWithRelationInput
  }

  export type PatientHealthDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    patientId?: string
    AND?: PatientHealthDataWhereInput | PatientHealthDataWhereInput[]
    OR?: PatientHealthDataWhereInput[]
    NOT?: PatientHealthDataWhereInput | PatientHealthDataWhereInput[]
    gender?: EnumGenderFilter<"PatientHealthData"> | $Enums.Gender
    dateOfBirth?: StringFilter<"PatientHealthData"> | string
    bloodGroup?: EnumBloodGroupFilter<"PatientHealthData"> | $Enums.BloodGroup
    hasAllergies?: BoolNullableFilter<"PatientHealthData"> | boolean | null
    hasDiabetes?: BoolNullableFilter<"PatientHealthData"> | boolean | null
    height?: StringFilter<"PatientHealthData"> | string
    weight?: StringFilter<"PatientHealthData"> | string
    smokingStatus?: BoolNullableFilter<"PatientHealthData"> | boolean | null
    dietaryPreferences?: StringNullableFilter<"PatientHealthData"> | string | null
    pregnancyStatus?: BoolNullableFilter<"PatientHealthData"> | boolean | null
    mentalHealthHistory?: StringNullableFilter<"PatientHealthData"> | string | null
    immunizationStatus?: StringNullableFilter<"PatientHealthData"> | string | null
    hasPastSurgeries?: BoolNullableFilter<"PatientHealthData"> | boolean | null
    recentAnxiety?: BoolNullableFilter<"PatientHealthData"> | boolean | null
    recentDepression?: BoolNullableFilter<"PatientHealthData"> | boolean | null
    maritalStatus?: EnumMaritalStatusFilter<"PatientHealthData"> | $Enums.MaritalStatus
    createdAt?: DateTimeFilter<"PatientHealthData"> | Date | string
    updatedAt?: DateTimeFilter<"PatientHealthData"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }, "id" | "patientId">

  export type PatientHealthDataOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    gender?: SortOrder
    dateOfBirth?: SortOrder
    bloodGroup?: SortOrder
    hasAllergies?: SortOrderInput | SortOrder
    hasDiabetes?: SortOrderInput | SortOrder
    height?: SortOrder
    weight?: SortOrder
    smokingStatus?: SortOrderInput | SortOrder
    dietaryPreferences?: SortOrderInput | SortOrder
    pregnancyStatus?: SortOrderInput | SortOrder
    mentalHealthHistory?: SortOrderInput | SortOrder
    immunizationStatus?: SortOrderInput | SortOrder
    hasPastSurgeries?: SortOrderInput | SortOrder
    recentAnxiety?: SortOrderInput | SortOrder
    recentDepression?: SortOrderInput | SortOrder
    maritalStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PatientHealthDataCountOrderByAggregateInput
    _max?: PatientHealthDataMaxOrderByAggregateInput
    _min?: PatientHealthDataMinOrderByAggregateInput
  }

  export type PatientHealthDataScalarWhereWithAggregatesInput = {
    AND?: PatientHealthDataScalarWhereWithAggregatesInput | PatientHealthDataScalarWhereWithAggregatesInput[]
    OR?: PatientHealthDataScalarWhereWithAggregatesInput[]
    NOT?: PatientHealthDataScalarWhereWithAggregatesInput | PatientHealthDataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PatientHealthData"> | string
    patientId?: StringWithAggregatesFilter<"PatientHealthData"> | string
    gender?: EnumGenderWithAggregatesFilter<"PatientHealthData"> | $Enums.Gender
    dateOfBirth?: StringWithAggregatesFilter<"PatientHealthData"> | string
    bloodGroup?: EnumBloodGroupWithAggregatesFilter<"PatientHealthData"> | $Enums.BloodGroup
    hasAllergies?: BoolNullableWithAggregatesFilter<"PatientHealthData"> | boolean | null
    hasDiabetes?: BoolNullableWithAggregatesFilter<"PatientHealthData"> | boolean | null
    height?: StringWithAggregatesFilter<"PatientHealthData"> | string
    weight?: StringWithAggregatesFilter<"PatientHealthData"> | string
    smokingStatus?: BoolNullableWithAggregatesFilter<"PatientHealthData"> | boolean | null
    dietaryPreferences?: StringNullableWithAggregatesFilter<"PatientHealthData"> | string | null
    pregnancyStatus?: BoolNullableWithAggregatesFilter<"PatientHealthData"> | boolean | null
    mentalHealthHistory?: StringNullableWithAggregatesFilter<"PatientHealthData"> | string | null
    immunizationStatus?: StringNullableWithAggregatesFilter<"PatientHealthData"> | string | null
    hasPastSurgeries?: BoolNullableWithAggregatesFilter<"PatientHealthData"> | boolean | null
    recentAnxiety?: BoolNullableWithAggregatesFilter<"PatientHealthData"> | boolean | null
    recentDepression?: BoolNullableWithAggregatesFilter<"PatientHealthData"> | boolean | null
    maritalStatus?: EnumMaritalStatusWithAggregatesFilter<"PatientHealthData"> | $Enums.MaritalStatus
    createdAt?: DateTimeWithAggregatesFilter<"PatientHealthData"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PatientHealthData"> | Date | string
  }

  export type MedicalReportWhereInput = {
    AND?: MedicalReportWhereInput | MedicalReportWhereInput[]
    OR?: MedicalReportWhereInput[]
    NOT?: MedicalReportWhereInput | MedicalReportWhereInput[]
    id?: StringFilter<"MedicalReport"> | string
    patientId?: StringFilter<"MedicalReport"> | string
    reportName?: StringFilter<"MedicalReport"> | string
    reportLink?: StringFilter<"MedicalReport"> | string
    createdAt?: DateTimeFilter<"MedicalReport"> | Date | string
    updatedAt?: DateTimeFilter<"MedicalReport"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }

  export type MedicalReportOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    reportName?: SortOrder
    reportLink?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patient?: PatientOrderByWithRelationInput
  }

  export type MedicalReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MedicalReportWhereInput | MedicalReportWhereInput[]
    OR?: MedicalReportWhereInput[]
    NOT?: MedicalReportWhereInput | MedicalReportWhereInput[]
    patientId?: StringFilter<"MedicalReport"> | string
    reportName?: StringFilter<"MedicalReport"> | string
    reportLink?: StringFilter<"MedicalReport"> | string
    createdAt?: DateTimeFilter<"MedicalReport"> | Date | string
    updatedAt?: DateTimeFilter<"MedicalReport"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }, "id">

  export type MedicalReportOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    reportName?: SortOrder
    reportLink?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MedicalReportCountOrderByAggregateInput
    _max?: MedicalReportMaxOrderByAggregateInput
    _min?: MedicalReportMinOrderByAggregateInput
  }

  export type MedicalReportScalarWhereWithAggregatesInput = {
    AND?: MedicalReportScalarWhereWithAggregatesInput | MedicalReportScalarWhereWithAggregatesInput[]
    OR?: MedicalReportScalarWhereWithAggregatesInput[]
    NOT?: MedicalReportScalarWhereWithAggregatesInput | MedicalReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MedicalReport"> | string
    patientId?: StringWithAggregatesFilter<"MedicalReport"> | string
    reportName?: StringWithAggregatesFilter<"MedicalReport"> | string
    reportLink?: StringWithAggregatesFilter<"MedicalReport"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MedicalReport"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MedicalReport"> | Date | string
  }

  export type ScheduleWhereInput = {
    AND?: ScheduleWhereInput | ScheduleWhereInput[]
    OR?: ScheduleWhereInput[]
    NOT?: ScheduleWhereInput | ScheduleWhereInput[]
    id?: StringFilter<"Schedule"> | string
    startDateTime?: DateTimeFilter<"Schedule"> | Date | string
    endDateTime?: DateTimeFilter<"Schedule"> | Date | string
    createdAt?: DateTimeFilter<"Schedule"> | Date | string
    updatedAt?: DateTimeFilter<"Schedule"> | Date | string
    doctorSchedules?: DoctorSchedulesListRelationFilter
  }

  export type ScheduleOrderByWithRelationInput = {
    id?: SortOrder
    startDateTime?: SortOrder
    endDateTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    doctorSchedules?: DoctorSchedulesOrderByRelationAggregateInput
  }

  export type ScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScheduleWhereInput | ScheduleWhereInput[]
    OR?: ScheduleWhereInput[]
    NOT?: ScheduleWhereInput | ScheduleWhereInput[]
    startDateTime?: DateTimeFilter<"Schedule"> | Date | string
    endDateTime?: DateTimeFilter<"Schedule"> | Date | string
    createdAt?: DateTimeFilter<"Schedule"> | Date | string
    updatedAt?: DateTimeFilter<"Schedule"> | Date | string
    doctorSchedules?: DoctorSchedulesListRelationFilter
  }, "id">

  export type ScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    startDateTime?: SortOrder
    endDateTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ScheduleCountOrderByAggregateInput
    _max?: ScheduleMaxOrderByAggregateInput
    _min?: ScheduleMinOrderByAggregateInput
  }

  export type ScheduleScalarWhereWithAggregatesInput = {
    AND?: ScheduleScalarWhereWithAggregatesInput | ScheduleScalarWhereWithAggregatesInput[]
    OR?: ScheduleScalarWhereWithAggregatesInput[]
    NOT?: ScheduleScalarWhereWithAggregatesInput | ScheduleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Schedule"> | string
    startDateTime?: DateTimeWithAggregatesFilter<"Schedule"> | Date | string
    endDateTime?: DateTimeWithAggregatesFilter<"Schedule"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Schedule"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Schedule"> | Date | string
  }

  export type DoctorSchedulesWhereInput = {
    AND?: DoctorSchedulesWhereInput | DoctorSchedulesWhereInput[]
    OR?: DoctorSchedulesWhereInput[]
    NOT?: DoctorSchedulesWhereInput | DoctorSchedulesWhereInput[]
    doctorId?: StringFilter<"DoctorSchedules"> | string
    scheduleId?: StringFilter<"DoctorSchedules"> | string
    isBooked?: BoolFilter<"DoctorSchedules"> | boolean
    appointmentId?: StringNullableFilter<"DoctorSchedules"> | string | null
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
    schedule?: XOR<ScheduleScalarRelationFilter, ScheduleWhereInput>
  }

  export type DoctorSchedulesOrderByWithRelationInput = {
    doctorId?: SortOrder
    scheduleId?: SortOrder
    isBooked?: SortOrder
    appointmentId?: SortOrderInput | SortOrder
    doctor?: DoctorOrderByWithRelationInput
    schedule?: ScheduleOrderByWithRelationInput
  }

  export type DoctorSchedulesWhereUniqueInput = Prisma.AtLeast<{
    appointmentId?: string
    doctorId_scheduleId?: DoctorSchedulesDoctorIdScheduleIdCompoundUniqueInput
    AND?: DoctorSchedulesWhereInput | DoctorSchedulesWhereInput[]
    OR?: DoctorSchedulesWhereInput[]
    NOT?: DoctorSchedulesWhereInput | DoctorSchedulesWhereInput[]
    doctorId?: StringFilter<"DoctorSchedules"> | string
    scheduleId?: StringFilter<"DoctorSchedules"> | string
    isBooked?: BoolFilter<"DoctorSchedules"> | boolean
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
    schedule?: XOR<ScheduleScalarRelationFilter, ScheduleWhereInput>
  }, "doctorId_scheduleId" | "appointmentId">

  export type DoctorSchedulesOrderByWithAggregationInput = {
    doctorId?: SortOrder
    scheduleId?: SortOrder
    isBooked?: SortOrder
    appointmentId?: SortOrderInput | SortOrder
    _count?: DoctorSchedulesCountOrderByAggregateInput
    _max?: DoctorSchedulesMaxOrderByAggregateInput
    _min?: DoctorSchedulesMinOrderByAggregateInput
  }

  export type DoctorSchedulesScalarWhereWithAggregatesInput = {
    AND?: DoctorSchedulesScalarWhereWithAggregatesInput | DoctorSchedulesScalarWhereWithAggregatesInput[]
    OR?: DoctorSchedulesScalarWhereWithAggregatesInput[]
    NOT?: DoctorSchedulesScalarWhereWithAggregatesInput | DoctorSchedulesScalarWhereWithAggregatesInput[]
    doctorId?: StringWithAggregatesFilter<"DoctorSchedules"> | string
    scheduleId?: StringWithAggregatesFilter<"DoctorSchedules"> | string
    isBooked?: BoolWithAggregatesFilter<"DoctorSchedules"> | boolean
    appointmentId?: StringNullableWithAggregatesFilter<"DoctorSchedules"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    role: $Enums.UserRole
    needPasswordChange?: boolean
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    admin?: AdminCreateNestedOneWithoutUserInput
    doctor?: DoctorCreateNestedOneWithoutUserInput
    patient?: PatientCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    role: $Enums.UserRole
    needPasswordChange?: boolean
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    admin?: AdminUncheckedCreateNestedOneWithoutUserInput
    doctor?: DoctorUncheckedCreateNestedOneWithoutUserInput
    patient?: PatientUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    needPasswordChange?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUpdateOneWithoutUserNestedInput
    doctor?: DoctorUpdateOneWithoutUserNestedInput
    patient?: PatientUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    needPasswordChange?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
    doctor?: DoctorUncheckedUpdateOneWithoutUserNestedInput
    patient?: PatientUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    role: $Enums.UserRole
    needPasswordChange?: boolean
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    needPasswordChange?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    needPasswordChange?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateInput = {
    id?: string
    name: string
    profilePhoto?: string | null
    contactNumber: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAdminInput
  }

  export type AdminUncheckedCreateInput = {
    id?: string
    name: string
    profilePhoto?: string | null
    contactNumber: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
  }

  export type AdminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type AdminCreateManyInput = {
    id?: string
    name: string
    profilePhoto?: string | null
    contactNumber: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
  }

  export type AdminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type DoctorCreateInput = {
    id?: string
    name: string
    profilePhoto?: string | null
    contactNumber: string
    address?: string | null
    registrationNumber: string
    experience?: number
    gender: $Enums.Gender
    appointmentFee: number
    qualification: string
    currentWorkPlace: string
    designation: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDoctorInput
    doctorSpecialties?: doctorSpecialtiesCreateNestedManyWithoutDoctorInput
    doctorSchedules?: DoctorSchedulesCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateInput = {
    id?: string
    name: string
    profilePhoto?: string | null
    contactNumber: string
    address?: string | null
    registrationNumber: string
    experience?: number
    gender: $Enums.Gender
    appointmentFee: number
    qualification: string
    currentWorkPlace: string
    designation: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    doctorSpecialties?: doctorSpecialtiesUncheckedCreateNestedManyWithoutDoctorInput
    doctorSchedules?: DoctorSchedulesUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNumber?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    appointmentFee?: IntFieldUpdateOperationsInput | number
    qualification?: StringFieldUpdateOperationsInput | string
    currentWorkPlace?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDoctorNestedInput
    doctorSpecialties?: doctorSpecialtiesUpdateManyWithoutDoctorNestedInput
    doctorSchedules?: DoctorSchedulesUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNumber?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    appointmentFee?: IntFieldUpdateOperationsInput | number
    qualification?: StringFieldUpdateOperationsInput | string
    currentWorkPlace?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    doctorSpecialties?: doctorSpecialtiesUncheckedUpdateManyWithoutDoctorNestedInput
    doctorSchedules?: DoctorSchedulesUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorCreateManyInput = {
    id?: string
    name: string
    profilePhoto?: string | null
    contactNumber: string
    address?: string | null
    registrationNumber: string
    experience?: number
    gender: $Enums.Gender
    appointmentFee: number
    qualification: string
    currentWorkPlace: string
    designation: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
  }

  export type DoctorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNumber?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    appointmentFee?: IntFieldUpdateOperationsInput | number
    qualification?: StringFieldUpdateOperationsInput | string
    currentWorkPlace?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNumber?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    appointmentFee?: IntFieldUpdateOperationsInput | number
    qualification?: StringFieldUpdateOperationsInput | string
    currentWorkPlace?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type PatientCreateInput = {
    id?: string
    name: string
    profilePhoto?: string | null
    contactNumber?: string | null
    address?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    patientHealthData?: PatientHealthDataCreateNestedOneWithoutPatientInput
    medicalReports?: MedicalReportCreateNestedManyWithoutPatientInput
    user: UserCreateNestedOneWithoutPatientInput
  }

  export type PatientUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    profilePhoto?: string | null
    contactNumber?: string | null
    address?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    patientHealthData?: PatientHealthDataUncheckedCreateNestedOneWithoutPatientInput
    medicalReports?: MedicalReportUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientHealthData?: PatientHealthDataUpdateOneWithoutPatientNestedInput
    medicalReports?: MedicalReportUpdateManyWithoutPatientNestedInput
    user?: UserUpdateOneRequiredWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientHealthData?: PatientHealthDataUncheckedUpdateOneWithoutPatientNestedInput
    medicalReports?: MedicalReportUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientCreateManyInput = {
    id?: string
    email: string
    name: string
    profilePhoto?: string | null
    contactNumber?: string | null
    address?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpecialtiesCreateInput = {
    id?: string
    title: string
    icon: string
    doctorSpecialties?: doctorSpecialtiesCreateNestedManyWithoutSpecialtiesInput
  }

  export type SpecialtiesUncheckedCreateInput = {
    id?: string
    title: string
    icon: string
    doctorSpecialties?: doctorSpecialtiesUncheckedCreateNestedManyWithoutSpecialtiesInput
  }

  export type SpecialtiesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    doctorSpecialties?: doctorSpecialtiesUpdateManyWithoutSpecialtiesNestedInput
  }

  export type SpecialtiesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    doctorSpecialties?: doctorSpecialtiesUncheckedUpdateManyWithoutSpecialtiesNestedInput
  }

  export type SpecialtiesCreateManyInput = {
    id?: string
    title: string
    icon: string
  }

  export type SpecialtiesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
  }

  export type SpecialtiesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
  }

  export type doctorSpecialtiesCreateInput = {
    specialties: SpecialtiesCreateNestedOneWithoutDoctorSpecialtiesInput
    doctor: DoctorCreateNestedOneWithoutDoctorSpecialtiesInput
  }

  export type doctorSpecialtiesUncheckedCreateInput = {
    specialtiesId: string
    doctorId: string
  }

  export type doctorSpecialtiesUpdateInput = {
    specialties?: SpecialtiesUpdateOneRequiredWithoutDoctorSpecialtiesNestedInput
    doctor?: DoctorUpdateOneRequiredWithoutDoctorSpecialtiesNestedInput
  }

  export type doctorSpecialtiesUncheckedUpdateInput = {
    specialtiesId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
  }

  export type doctorSpecialtiesCreateManyInput = {
    specialtiesId: string
    doctorId: string
  }

  export type doctorSpecialtiesUpdateManyMutationInput = {

  }

  export type doctorSpecialtiesUncheckedUpdateManyInput = {
    specialtiesId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
  }

  export type PatientHealthDataCreateInput = {
    id?: string
    gender: $Enums.Gender
    dateOfBirth: string
    bloodGroup: $Enums.BloodGroup
    hasAllergies?: boolean | null
    hasDiabetes?: boolean | null
    height: string
    weight: string
    smokingStatus?: boolean | null
    dietaryPreferences?: string | null
    pregnancyStatus?: boolean | null
    mentalHealthHistory?: string | null
    immunizationStatus?: string | null
    hasPastSurgeries?: boolean | null
    recentAnxiety?: boolean | null
    recentDepression?: boolean | null
    maritalStatus?: $Enums.MaritalStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutPatientHealthDataInput
  }

  export type PatientHealthDataUncheckedCreateInput = {
    id?: string
    patientId: string
    gender: $Enums.Gender
    dateOfBirth: string
    bloodGroup: $Enums.BloodGroup
    hasAllergies?: boolean | null
    hasDiabetes?: boolean | null
    height: string
    weight: string
    smokingStatus?: boolean | null
    dietaryPreferences?: string | null
    pregnancyStatus?: boolean | null
    mentalHealthHistory?: string | null
    immunizationStatus?: string | null
    hasPastSurgeries?: boolean | null
    recentAnxiety?: boolean | null
    recentDepression?: boolean | null
    maritalStatus?: $Enums.MaritalStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientHealthDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dateOfBirth?: StringFieldUpdateOperationsInput | string
    bloodGroup?: EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup
    hasAllergies?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hasDiabetes?: NullableBoolFieldUpdateOperationsInput | boolean | null
    height?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    smokingStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dietaryPreferences?: NullableStringFieldUpdateOperationsInput | string | null
    pregnancyStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mentalHealthHistory?: NullableStringFieldUpdateOperationsInput | string | null
    immunizationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    hasPastSurgeries?: NullableBoolFieldUpdateOperationsInput | boolean | null
    recentAnxiety?: NullableBoolFieldUpdateOperationsInput | boolean | null
    recentDepression?: NullableBoolFieldUpdateOperationsInput | boolean | null
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutPatientHealthDataNestedInput
  }

  export type PatientHealthDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dateOfBirth?: StringFieldUpdateOperationsInput | string
    bloodGroup?: EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup
    hasAllergies?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hasDiabetes?: NullableBoolFieldUpdateOperationsInput | boolean | null
    height?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    smokingStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dietaryPreferences?: NullableStringFieldUpdateOperationsInput | string | null
    pregnancyStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mentalHealthHistory?: NullableStringFieldUpdateOperationsInput | string | null
    immunizationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    hasPastSurgeries?: NullableBoolFieldUpdateOperationsInput | boolean | null
    recentAnxiety?: NullableBoolFieldUpdateOperationsInput | boolean | null
    recentDepression?: NullableBoolFieldUpdateOperationsInput | boolean | null
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientHealthDataCreateManyInput = {
    id?: string
    patientId: string
    gender: $Enums.Gender
    dateOfBirth: string
    bloodGroup: $Enums.BloodGroup
    hasAllergies?: boolean | null
    hasDiabetes?: boolean | null
    height: string
    weight: string
    smokingStatus?: boolean | null
    dietaryPreferences?: string | null
    pregnancyStatus?: boolean | null
    mentalHealthHistory?: string | null
    immunizationStatus?: string | null
    hasPastSurgeries?: boolean | null
    recentAnxiety?: boolean | null
    recentDepression?: boolean | null
    maritalStatus?: $Enums.MaritalStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientHealthDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dateOfBirth?: StringFieldUpdateOperationsInput | string
    bloodGroup?: EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup
    hasAllergies?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hasDiabetes?: NullableBoolFieldUpdateOperationsInput | boolean | null
    height?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    smokingStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dietaryPreferences?: NullableStringFieldUpdateOperationsInput | string | null
    pregnancyStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mentalHealthHistory?: NullableStringFieldUpdateOperationsInput | string | null
    immunizationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    hasPastSurgeries?: NullableBoolFieldUpdateOperationsInput | boolean | null
    recentAnxiety?: NullableBoolFieldUpdateOperationsInput | boolean | null
    recentDepression?: NullableBoolFieldUpdateOperationsInput | boolean | null
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientHealthDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dateOfBirth?: StringFieldUpdateOperationsInput | string
    bloodGroup?: EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup
    hasAllergies?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hasDiabetes?: NullableBoolFieldUpdateOperationsInput | boolean | null
    height?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    smokingStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dietaryPreferences?: NullableStringFieldUpdateOperationsInput | string | null
    pregnancyStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mentalHealthHistory?: NullableStringFieldUpdateOperationsInput | string | null
    immunizationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    hasPastSurgeries?: NullableBoolFieldUpdateOperationsInput | boolean | null
    recentAnxiety?: NullableBoolFieldUpdateOperationsInput | boolean | null
    recentDepression?: NullableBoolFieldUpdateOperationsInput | boolean | null
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalReportCreateInput = {
    id?: string
    reportName: string
    reportLink: string
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutMedicalReportsInput
  }

  export type MedicalReportUncheckedCreateInput = {
    id?: string
    patientId: string
    reportName: string
    reportLink: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicalReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportName?: StringFieldUpdateOperationsInput | string
    reportLink?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutMedicalReportsNestedInput
  }

  export type MedicalReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    reportName?: StringFieldUpdateOperationsInput | string
    reportLink?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalReportCreateManyInput = {
    id?: string
    patientId: string
    reportName: string
    reportLink: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicalReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportName?: StringFieldUpdateOperationsInput | string
    reportLink?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    reportName?: StringFieldUpdateOperationsInput | string
    reportLink?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleCreateInput = {
    id?: string
    startDateTime: Date | string
    endDateTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    doctorSchedules?: DoctorSchedulesCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleUncheckedCreateInput = {
    id?: string
    startDateTime: Date | string
    endDateTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    doctorSchedules?: DoctorSchedulesUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorSchedules?: DoctorSchedulesUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorSchedules?: DoctorSchedulesUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleCreateManyInput = {
    id?: string
    startDateTime: Date | string
    endDateTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorSchedulesCreateInput = {
    isBooked?: boolean
    appointmentId?: string | null
    doctor: DoctorCreateNestedOneWithoutDoctorSchedulesInput
    schedule: ScheduleCreateNestedOneWithoutDoctorSchedulesInput
  }

  export type DoctorSchedulesUncheckedCreateInput = {
    doctorId: string
    scheduleId: string
    isBooked?: boolean
    appointmentId?: string | null
  }

  export type DoctorSchedulesUpdateInput = {
    isBooked?: BoolFieldUpdateOperationsInput | boolean
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
    doctor?: DoctorUpdateOneRequiredWithoutDoctorSchedulesNestedInput
    schedule?: ScheduleUpdateOneRequiredWithoutDoctorSchedulesNestedInput
  }

  export type DoctorSchedulesUncheckedUpdateInput = {
    doctorId?: StringFieldUpdateOperationsInput | string
    scheduleId?: StringFieldUpdateOperationsInput | string
    isBooked?: BoolFieldUpdateOperationsInput | boolean
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DoctorSchedulesCreateManyInput = {
    doctorId: string
    scheduleId: string
    isBooked?: boolean
    appointmentId?: string | null
  }

  export type DoctorSchedulesUpdateManyMutationInput = {
    isBooked?: BoolFieldUpdateOperationsInput | boolean
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DoctorSchedulesUncheckedUpdateManyInput = {
    doctorId?: StringFieldUpdateOperationsInput | string
    scheduleId?: StringFieldUpdateOperationsInput | string
    isBooked?: BoolFieldUpdateOperationsInput | boolean
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AdminNullableScalarRelationFilter = {
    is?: AdminWhereInput | null
    isNot?: AdminWhereInput | null
  }

  export type DoctorNullableScalarRelationFilter = {
    is?: DoctorWhereInput | null
    isNot?: DoctorWhereInput | null
  }

  export type PatientNullableScalarRelationFilter = {
    is?: PatientWhereInput | null
    isNot?: PatientWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    needPasswordChange?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    needPasswordChange?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    needPasswordChange?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    profilePhoto?: SortOrder
    contactNumber?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    profilePhoto?: SortOrder
    contactNumber?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    profilePhoto?: SortOrder
    contactNumber?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type DoctorSpecialtiesListRelationFilter = {
    every?: doctorSpecialtiesWhereInput
    some?: doctorSpecialtiesWhereInput
    none?: doctorSpecialtiesWhereInput
  }

  export type DoctorSchedulesListRelationFilter = {
    every?: DoctorSchedulesWhereInput
    some?: DoctorSchedulesWhereInput
    none?: DoctorSchedulesWhereInput
  }

  export type doctorSpecialtiesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DoctorSchedulesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DoctorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    profilePhoto?: SortOrder
    contactNumber?: SortOrder
    address?: SortOrder
    registrationNumber?: SortOrder
    experience?: SortOrder
    gender?: SortOrder
    appointmentFee?: SortOrder
    qualification?: SortOrder
    currentWorkPlace?: SortOrder
    designation?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
  }

  export type DoctorAvgOrderByAggregateInput = {
    experience?: SortOrder
    appointmentFee?: SortOrder
  }

  export type DoctorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    profilePhoto?: SortOrder
    contactNumber?: SortOrder
    address?: SortOrder
    registrationNumber?: SortOrder
    experience?: SortOrder
    gender?: SortOrder
    appointmentFee?: SortOrder
    qualification?: SortOrder
    currentWorkPlace?: SortOrder
    designation?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
  }

  export type DoctorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    profilePhoto?: SortOrder
    contactNumber?: SortOrder
    address?: SortOrder
    registrationNumber?: SortOrder
    experience?: SortOrder
    gender?: SortOrder
    appointmentFee?: SortOrder
    qualification?: SortOrder
    currentWorkPlace?: SortOrder
    designation?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
  }

  export type DoctorSumOrderByAggregateInput = {
    experience?: SortOrder
    appointmentFee?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type PatientHealthDataNullableScalarRelationFilter = {
    is?: PatientHealthDataWhereInput | null
    isNot?: PatientHealthDataWhereInput | null
  }

  export type MedicalReportListRelationFilter = {
    every?: MedicalReportWhereInput
    some?: MedicalReportWhereInput
    none?: MedicalReportWhereInput
  }

  export type MedicalReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PatientCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    profilePhoto?: SortOrder
    contactNumber?: SortOrder
    address?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatientMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    profilePhoto?: SortOrder
    contactNumber?: SortOrder
    address?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatientMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    profilePhoto?: SortOrder
    contactNumber?: SortOrder
    address?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SpecialtiesCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    icon?: SortOrder
  }

  export type SpecialtiesMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    icon?: SortOrder
  }

  export type SpecialtiesMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    icon?: SortOrder
  }

  export type SpecialtiesScalarRelationFilter = {
    is?: SpecialtiesWhereInput
    isNot?: SpecialtiesWhereInput
  }

  export type DoctorScalarRelationFilter = {
    is?: DoctorWhereInput
    isNot?: DoctorWhereInput
  }

  export type doctorSpecialtiesSpecialtiesIdDoctorIdCompoundUniqueInput = {
    specialtiesId: string
    doctorId: string
  }

  export type doctorSpecialtiesCountOrderByAggregateInput = {
    specialtiesId?: SortOrder
    doctorId?: SortOrder
  }

  export type doctorSpecialtiesMaxOrderByAggregateInput = {
    specialtiesId?: SortOrder
    doctorId?: SortOrder
  }

  export type doctorSpecialtiesMinOrderByAggregateInput = {
    specialtiesId?: SortOrder
    doctorId?: SortOrder
  }

  export type EnumBloodGroupFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodGroup | EnumBloodGroupFieldRefInput<$PrismaModel>
    in?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel>
    notIn?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel>
    not?: NestedEnumBloodGroupFilter<$PrismaModel> | $Enums.BloodGroup
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type EnumMaritalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MaritalStatus | EnumMaritalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMaritalStatusFilter<$PrismaModel> | $Enums.MaritalStatus
  }

  export type PatientScalarRelationFilter = {
    is?: PatientWhereInput
    isNot?: PatientWhereInput
  }

  export type PatientHealthDataCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    gender?: SortOrder
    dateOfBirth?: SortOrder
    bloodGroup?: SortOrder
    hasAllergies?: SortOrder
    hasDiabetes?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    smokingStatus?: SortOrder
    dietaryPreferences?: SortOrder
    pregnancyStatus?: SortOrder
    mentalHealthHistory?: SortOrder
    immunizationStatus?: SortOrder
    hasPastSurgeries?: SortOrder
    recentAnxiety?: SortOrder
    recentDepression?: SortOrder
    maritalStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatientHealthDataMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    gender?: SortOrder
    dateOfBirth?: SortOrder
    bloodGroup?: SortOrder
    hasAllergies?: SortOrder
    hasDiabetes?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    smokingStatus?: SortOrder
    dietaryPreferences?: SortOrder
    pregnancyStatus?: SortOrder
    mentalHealthHistory?: SortOrder
    immunizationStatus?: SortOrder
    hasPastSurgeries?: SortOrder
    recentAnxiety?: SortOrder
    recentDepression?: SortOrder
    maritalStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatientHealthDataMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    gender?: SortOrder
    dateOfBirth?: SortOrder
    bloodGroup?: SortOrder
    hasAllergies?: SortOrder
    hasDiabetes?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    smokingStatus?: SortOrder
    dietaryPreferences?: SortOrder
    pregnancyStatus?: SortOrder
    mentalHealthHistory?: SortOrder
    immunizationStatus?: SortOrder
    hasPastSurgeries?: SortOrder
    recentAnxiety?: SortOrder
    recentDepression?: SortOrder
    maritalStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumBloodGroupWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodGroup | EnumBloodGroupFieldRefInput<$PrismaModel>
    in?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel>
    notIn?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel>
    not?: NestedEnumBloodGroupWithAggregatesFilter<$PrismaModel> | $Enums.BloodGroup
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBloodGroupFilter<$PrismaModel>
    _max?: NestedEnumBloodGroupFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type EnumMaritalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MaritalStatus | EnumMaritalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMaritalStatusWithAggregatesFilter<$PrismaModel> | $Enums.MaritalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMaritalStatusFilter<$PrismaModel>
    _max?: NestedEnumMaritalStatusFilter<$PrismaModel>
  }

  export type MedicalReportCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    reportName?: SortOrder
    reportLink?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicalReportMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    reportName?: SortOrder
    reportLink?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicalReportMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    reportName?: SortOrder
    reportLink?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    startDateTime?: SortOrder
    endDateTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    startDateTime?: SortOrder
    endDateTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    startDateTime?: SortOrder
    endDateTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScheduleScalarRelationFilter = {
    is?: ScheduleWhereInput
    isNot?: ScheduleWhereInput
  }

  export type DoctorSchedulesDoctorIdScheduleIdCompoundUniqueInput = {
    doctorId: string
    scheduleId: string
  }

  export type DoctorSchedulesCountOrderByAggregateInput = {
    doctorId?: SortOrder
    scheduleId?: SortOrder
    isBooked?: SortOrder
    appointmentId?: SortOrder
  }

  export type DoctorSchedulesMaxOrderByAggregateInput = {
    doctorId?: SortOrder
    scheduleId?: SortOrder
    isBooked?: SortOrder
    appointmentId?: SortOrder
  }

  export type DoctorSchedulesMinOrderByAggregateInput = {
    doctorId?: SortOrder
    scheduleId?: SortOrder
    isBooked?: SortOrder
    appointmentId?: SortOrder
  }

  export type AdminCreateNestedOneWithoutUserInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    connect?: AdminWhereUniqueInput
  }

  export type DoctorCreateNestedOneWithoutUserInput = {
    create?: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutUserInput
    connect?: DoctorWhereUniqueInput
  }

  export type PatientCreateNestedOneWithoutUserInput = {
    create?: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientCreateOrConnectWithoutUserInput
    connect?: PatientWhereUniqueInput
  }

  export type AdminUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    connect?: AdminWhereUniqueInput
  }

  export type DoctorUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutUserInput
    connect?: DoctorWhereUniqueInput
  }

  export type PatientUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientCreateOrConnectWithoutUserInput
    connect?: PatientWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AdminUpdateOneWithoutUserNestedInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    upsert?: AdminUpsertWithoutUserInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutUserInput, AdminUpdateWithoutUserInput>, AdminUncheckedUpdateWithoutUserInput>
  }

  export type DoctorUpdateOneWithoutUserNestedInput = {
    create?: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutUserInput
    upsert?: DoctorUpsertWithoutUserInput
    disconnect?: DoctorWhereInput | boolean
    delete?: DoctorWhereInput | boolean
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutUserInput, DoctorUpdateWithoutUserInput>, DoctorUncheckedUpdateWithoutUserInput>
  }

  export type PatientUpdateOneWithoutUserNestedInput = {
    create?: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientCreateOrConnectWithoutUserInput
    upsert?: PatientUpsertWithoutUserInput
    disconnect?: PatientWhereInput | boolean
    delete?: PatientWhereInput | boolean
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutUserInput, PatientUpdateWithoutUserInput>, PatientUncheckedUpdateWithoutUserInput>
  }

  export type AdminUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    upsert?: AdminUpsertWithoutUserInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutUserInput, AdminUpdateWithoutUserInput>, AdminUncheckedUpdateWithoutUserInput>
  }

  export type DoctorUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutUserInput
    upsert?: DoctorUpsertWithoutUserInput
    disconnect?: DoctorWhereInput | boolean
    delete?: DoctorWhereInput | boolean
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutUserInput, DoctorUpdateWithoutUserInput>, DoctorUncheckedUpdateWithoutUserInput>
  }

  export type PatientUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientCreateOrConnectWithoutUserInput
    upsert?: PatientUpsertWithoutUserInput
    disconnect?: PatientWhereInput | boolean
    delete?: PatientWhereInput | boolean
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutUserInput, PatientUpdateWithoutUserInput>, PatientUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutAdminInput = {
    create?: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutAdminNestedInput = {
    create?: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminInput
    upsert?: UserUpsertWithoutAdminInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAdminInput, UserUpdateWithoutAdminInput>, UserUncheckedUpdateWithoutAdminInput>
  }

  export type UserCreateNestedOneWithoutDoctorInput = {
    create?: XOR<UserCreateWithoutDoctorInput, UserUncheckedCreateWithoutDoctorInput>
    connectOrCreate?: UserCreateOrConnectWithoutDoctorInput
    connect?: UserWhereUniqueInput
  }

  export type doctorSpecialtiesCreateNestedManyWithoutDoctorInput = {
    create?: XOR<doctorSpecialtiesCreateWithoutDoctorInput, doctorSpecialtiesUncheckedCreateWithoutDoctorInput> | doctorSpecialtiesCreateWithoutDoctorInput[] | doctorSpecialtiesUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: doctorSpecialtiesCreateOrConnectWithoutDoctorInput | doctorSpecialtiesCreateOrConnectWithoutDoctorInput[]
    createMany?: doctorSpecialtiesCreateManyDoctorInputEnvelope
    connect?: doctorSpecialtiesWhereUniqueInput | doctorSpecialtiesWhereUniqueInput[]
  }

  export type DoctorSchedulesCreateNestedManyWithoutDoctorInput = {
    create?: XOR<DoctorSchedulesCreateWithoutDoctorInput, DoctorSchedulesUncheckedCreateWithoutDoctorInput> | DoctorSchedulesCreateWithoutDoctorInput[] | DoctorSchedulesUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorSchedulesCreateOrConnectWithoutDoctorInput | DoctorSchedulesCreateOrConnectWithoutDoctorInput[]
    createMany?: DoctorSchedulesCreateManyDoctorInputEnvelope
    connect?: DoctorSchedulesWhereUniqueInput | DoctorSchedulesWhereUniqueInput[]
  }

  export type doctorSpecialtiesUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<doctorSpecialtiesCreateWithoutDoctorInput, doctorSpecialtiesUncheckedCreateWithoutDoctorInput> | doctorSpecialtiesCreateWithoutDoctorInput[] | doctorSpecialtiesUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: doctorSpecialtiesCreateOrConnectWithoutDoctorInput | doctorSpecialtiesCreateOrConnectWithoutDoctorInput[]
    createMany?: doctorSpecialtiesCreateManyDoctorInputEnvelope
    connect?: doctorSpecialtiesWhereUniqueInput | doctorSpecialtiesWhereUniqueInput[]
  }

  export type DoctorSchedulesUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<DoctorSchedulesCreateWithoutDoctorInput, DoctorSchedulesUncheckedCreateWithoutDoctorInput> | DoctorSchedulesCreateWithoutDoctorInput[] | DoctorSchedulesUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorSchedulesCreateOrConnectWithoutDoctorInput | DoctorSchedulesCreateOrConnectWithoutDoctorInput[]
    createMany?: DoctorSchedulesCreateManyDoctorInputEnvelope
    connect?: DoctorSchedulesWhereUniqueInput | DoctorSchedulesWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type UserUpdateOneRequiredWithoutDoctorNestedInput = {
    create?: XOR<UserCreateWithoutDoctorInput, UserUncheckedCreateWithoutDoctorInput>
    connectOrCreate?: UserCreateOrConnectWithoutDoctorInput
    upsert?: UserUpsertWithoutDoctorInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDoctorInput, UserUpdateWithoutDoctorInput>, UserUncheckedUpdateWithoutDoctorInput>
  }

  export type doctorSpecialtiesUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<doctorSpecialtiesCreateWithoutDoctorInput, doctorSpecialtiesUncheckedCreateWithoutDoctorInput> | doctorSpecialtiesCreateWithoutDoctorInput[] | doctorSpecialtiesUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: doctorSpecialtiesCreateOrConnectWithoutDoctorInput | doctorSpecialtiesCreateOrConnectWithoutDoctorInput[]
    upsert?: doctorSpecialtiesUpsertWithWhereUniqueWithoutDoctorInput | doctorSpecialtiesUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: doctorSpecialtiesCreateManyDoctorInputEnvelope
    set?: doctorSpecialtiesWhereUniqueInput | doctorSpecialtiesWhereUniqueInput[]
    disconnect?: doctorSpecialtiesWhereUniqueInput | doctorSpecialtiesWhereUniqueInput[]
    delete?: doctorSpecialtiesWhereUniqueInput | doctorSpecialtiesWhereUniqueInput[]
    connect?: doctorSpecialtiesWhereUniqueInput | doctorSpecialtiesWhereUniqueInput[]
    update?: doctorSpecialtiesUpdateWithWhereUniqueWithoutDoctorInput | doctorSpecialtiesUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: doctorSpecialtiesUpdateManyWithWhereWithoutDoctorInput | doctorSpecialtiesUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: doctorSpecialtiesScalarWhereInput | doctorSpecialtiesScalarWhereInput[]
  }

  export type DoctorSchedulesUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<DoctorSchedulesCreateWithoutDoctorInput, DoctorSchedulesUncheckedCreateWithoutDoctorInput> | DoctorSchedulesCreateWithoutDoctorInput[] | DoctorSchedulesUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorSchedulesCreateOrConnectWithoutDoctorInput | DoctorSchedulesCreateOrConnectWithoutDoctorInput[]
    upsert?: DoctorSchedulesUpsertWithWhereUniqueWithoutDoctorInput | DoctorSchedulesUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: DoctorSchedulesCreateManyDoctorInputEnvelope
    set?: DoctorSchedulesWhereUniqueInput | DoctorSchedulesWhereUniqueInput[]
    disconnect?: DoctorSchedulesWhereUniqueInput | DoctorSchedulesWhereUniqueInput[]
    delete?: DoctorSchedulesWhereUniqueInput | DoctorSchedulesWhereUniqueInput[]
    connect?: DoctorSchedulesWhereUniqueInput | DoctorSchedulesWhereUniqueInput[]
    update?: DoctorSchedulesUpdateWithWhereUniqueWithoutDoctorInput | DoctorSchedulesUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: DoctorSchedulesUpdateManyWithWhereWithoutDoctorInput | DoctorSchedulesUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: DoctorSchedulesScalarWhereInput | DoctorSchedulesScalarWhereInput[]
  }

  export type doctorSpecialtiesUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<doctorSpecialtiesCreateWithoutDoctorInput, doctorSpecialtiesUncheckedCreateWithoutDoctorInput> | doctorSpecialtiesCreateWithoutDoctorInput[] | doctorSpecialtiesUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: doctorSpecialtiesCreateOrConnectWithoutDoctorInput | doctorSpecialtiesCreateOrConnectWithoutDoctorInput[]
    upsert?: doctorSpecialtiesUpsertWithWhereUniqueWithoutDoctorInput | doctorSpecialtiesUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: doctorSpecialtiesCreateManyDoctorInputEnvelope
    set?: doctorSpecialtiesWhereUniqueInput | doctorSpecialtiesWhereUniqueInput[]
    disconnect?: doctorSpecialtiesWhereUniqueInput | doctorSpecialtiesWhereUniqueInput[]
    delete?: doctorSpecialtiesWhereUniqueInput | doctorSpecialtiesWhereUniqueInput[]
    connect?: doctorSpecialtiesWhereUniqueInput | doctorSpecialtiesWhereUniqueInput[]
    update?: doctorSpecialtiesUpdateWithWhereUniqueWithoutDoctorInput | doctorSpecialtiesUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: doctorSpecialtiesUpdateManyWithWhereWithoutDoctorInput | doctorSpecialtiesUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: doctorSpecialtiesScalarWhereInput | doctorSpecialtiesScalarWhereInput[]
  }

  export type DoctorSchedulesUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<DoctorSchedulesCreateWithoutDoctorInput, DoctorSchedulesUncheckedCreateWithoutDoctorInput> | DoctorSchedulesCreateWithoutDoctorInput[] | DoctorSchedulesUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorSchedulesCreateOrConnectWithoutDoctorInput | DoctorSchedulesCreateOrConnectWithoutDoctorInput[]
    upsert?: DoctorSchedulesUpsertWithWhereUniqueWithoutDoctorInput | DoctorSchedulesUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: DoctorSchedulesCreateManyDoctorInputEnvelope
    set?: DoctorSchedulesWhereUniqueInput | DoctorSchedulesWhereUniqueInput[]
    disconnect?: DoctorSchedulesWhereUniqueInput | DoctorSchedulesWhereUniqueInput[]
    delete?: DoctorSchedulesWhereUniqueInput | DoctorSchedulesWhereUniqueInput[]
    connect?: DoctorSchedulesWhereUniqueInput | DoctorSchedulesWhereUniqueInput[]
    update?: DoctorSchedulesUpdateWithWhereUniqueWithoutDoctorInput | DoctorSchedulesUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: DoctorSchedulesUpdateManyWithWhereWithoutDoctorInput | DoctorSchedulesUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: DoctorSchedulesScalarWhereInput | DoctorSchedulesScalarWhereInput[]
  }

  export type PatientHealthDataCreateNestedOneWithoutPatientInput = {
    create?: XOR<PatientHealthDataCreateWithoutPatientInput, PatientHealthDataUncheckedCreateWithoutPatientInput>
    connectOrCreate?: PatientHealthDataCreateOrConnectWithoutPatientInput
    connect?: PatientHealthDataWhereUniqueInput
  }

  export type MedicalReportCreateNestedManyWithoutPatientInput = {
    create?: XOR<MedicalReportCreateWithoutPatientInput, MedicalReportUncheckedCreateWithoutPatientInput> | MedicalReportCreateWithoutPatientInput[] | MedicalReportUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: MedicalReportCreateOrConnectWithoutPatientInput | MedicalReportCreateOrConnectWithoutPatientInput[]
    createMany?: MedicalReportCreateManyPatientInputEnvelope
    connect?: MedicalReportWhereUniqueInput | MedicalReportWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutPatientInput = {
    create?: XOR<UserCreateWithoutPatientInput, UserUncheckedCreateWithoutPatientInput>
    connectOrCreate?: UserCreateOrConnectWithoutPatientInput
    connect?: UserWhereUniqueInput
  }

  export type PatientHealthDataUncheckedCreateNestedOneWithoutPatientInput = {
    create?: XOR<PatientHealthDataCreateWithoutPatientInput, PatientHealthDataUncheckedCreateWithoutPatientInput>
    connectOrCreate?: PatientHealthDataCreateOrConnectWithoutPatientInput
    connect?: PatientHealthDataWhereUniqueInput
  }

  export type MedicalReportUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<MedicalReportCreateWithoutPatientInput, MedicalReportUncheckedCreateWithoutPatientInput> | MedicalReportCreateWithoutPatientInput[] | MedicalReportUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: MedicalReportCreateOrConnectWithoutPatientInput | MedicalReportCreateOrConnectWithoutPatientInput[]
    createMany?: MedicalReportCreateManyPatientInputEnvelope
    connect?: MedicalReportWhereUniqueInput | MedicalReportWhereUniqueInput[]
  }

  export type PatientHealthDataUpdateOneWithoutPatientNestedInput = {
    create?: XOR<PatientHealthDataCreateWithoutPatientInput, PatientHealthDataUncheckedCreateWithoutPatientInput>
    connectOrCreate?: PatientHealthDataCreateOrConnectWithoutPatientInput
    upsert?: PatientHealthDataUpsertWithoutPatientInput
    disconnect?: PatientHealthDataWhereInput | boolean
    delete?: PatientHealthDataWhereInput | boolean
    connect?: PatientHealthDataWhereUniqueInput
    update?: XOR<XOR<PatientHealthDataUpdateToOneWithWhereWithoutPatientInput, PatientHealthDataUpdateWithoutPatientInput>, PatientHealthDataUncheckedUpdateWithoutPatientInput>
  }

  export type MedicalReportUpdateManyWithoutPatientNestedInput = {
    create?: XOR<MedicalReportCreateWithoutPatientInput, MedicalReportUncheckedCreateWithoutPatientInput> | MedicalReportCreateWithoutPatientInput[] | MedicalReportUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: MedicalReportCreateOrConnectWithoutPatientInput | MedicalReportCreateOrConnectWithoutPatientInput[]
    upsert?: MedicalReportUpsertWithWhereUniqueWithoutPatientInput | MedicalReportUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: MedicalReportCreateManyPatientInputEnvelope
    set?: MedicalReportWhereUniqueInput | MedicalReportWhereUniqueInput[]
    disconnect?: MedicalReportWhereUniqueInput | MedicalReportWhereUniqueInput[]
    delete?: MedicalReportWhereUniqueInput | MedicalReportWhereUniqueInput[]
    connect?: MedicalReportWhereUniqueInput | MedicalReportWhereUniqueInput[]
    update?: MedicalReportUpdateWithWhereUniqueWithoutPatientInput | MedicalReportUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: MedicalReportUpdateManyWithWhereWithoutPatientInput | MedicalReportUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: MedicalReportScalarWhereInput | MedicalReportScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutPatientNestedInput = {
    create?: XOR<UserCreateWithoutPatientInput, UserUncheckedCreateWithoutPatientInput>
    connectOrCreate?: UserCreateOrConnectWithoutPatientInput
    upsert?: UserUpsertWithoutPatientInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPatientInput, UserUpdateWithoutPatientInput>, UserUncheckedUpdateWithoutPatientInput>
  }

  export type PatientHealthDataUncheckedUpdateOneWithoutPatientNestedInput = {
    create?: XOR<PatientHealthDataCreateWithoutPatientInput, PatientHealthDataUncheckedCreateWithoutPatientInput>
    connectOrCreate?: PatientHealthDataCreateOrConnectWithoutPatientInput
    upsert?: PatientHealthDataUpsertWithoutPatientInput
    disconnect?: PatientHealthDataWhereInput | boolean
    delete?: PatientHealthDataWhereInput | boolean
    connect?: PatientHealthDataWhereUniqueInput
    update?: XOR<XOR<PatientHealthDataUpdateToOneWithWhereWithoutPatientInput, PatientHealthDataUpdateWithoutPatientInput>, PatientHealthDataUncheckedUpdateWithoutPatientInput>
  }

  export type MedicalReportUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<MedicalReportCreateWithoutPatientInput, MedicalReportUncheckedCreateWithoutPatientInput> | MedicalReportCreateWithoutPatientInput[] | MedicalReportUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: MedicalReportCreateOrConnectWithoutPatientInput | MedicalReportCreateOrConnectWithoutPatientInput[]
    upsert?: MedicalReportUpsertWithWhereUniqueWithoutPatientInput | MedicalReportUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: MedicalReportCreateManyPatientInputEnvelope
    set?: MedicalReportWhereUniqueInput | MedicalReportWhereUniqueInput[]
    disconnect?: MedicalReportWhereUniqueInput | MedicalReportWhereUniqueInput[]
    delete?: MedicalReportWhereUniqueInput | MedicalReportWhereUniqueInput[]
    connect?: MedicalReportWhereUniqueInput | MedicalReportWhereUniqueInput[]
    update?: MedicalReportUpdateWithWhereUniqueWithoutPatientInput | MedicalReportUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: MedicalReportUpdateManyWithWhereWithoutPatientInput | MedicalReportUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: MedicalReportScalarWhereInput | MedicalReportScalarWhereInput[]
  }

  export type doctorSpecialtiesCreateNestedManyWithoutSpecialtiesInput = {
    create?: XOR<doctorSpecialtiesCreateWithoutSpecialtiesInput, doctorSpecialtiesUncheckedCreateWithoutSpecialtiesInput> | doctorSpecialtiesCreateWithoutSpecialtiesInput[] | doctorSpecialtiesUncheckedCreateWithoutSpecialtiesInput[]
    connectOrCreate?: doctorSpecialtiesCreateOrConnectWithoutSpecialtiesInput | doctorSpecialtiesCreateOrConnectWithoutSpecialtiesInput[]
    createMany?: doctorSpecialtiesCreateManySpecialtiesInputEnvelope
    connect?: doctorSpecialtiesWhereUniqueInput | doctorSpecialtiesWhereUniqueInput[]
  }

  export type doctorSpecialtiesUncheckedCreateNestedManyWithoutSpecialtiesInput = {
    create?: XOR<doctorSpecialtiesCreateWithoutSpecialtiesInput, doctorSpecialtiesUncheckedCreateWithoutSpecialtiesInput> | doctorSpecialtiesCreateWithoutSpecialtiesInput[] | doctorSpecialtiesUncheckedCreateWithoutSpecialtiesInput[]
    connectOrCreate?: doctorSpecialtiesCreateOrConnectWithoutSpecialtiesInput | doctorSpecialtiesCreateOrConnectWithoutSpecialtiesInput[]
    createMany?: doctorSpecialtiesCreateManySpecialtiesInputEnvelope
    connect?: doctorSpecialtiesWhereUniqueInput | doctorSpecialtiesWhereUniqueInput[]
  }

  export type doctorSpecialtiesUpdateManyWithoutSpecialtiesNestedInput = {
    create?: XOR<doctorSpecialtiesCreateWithoutSpecialtiesInput, doctorSpecialtiesUncheckedCreateWithoutSpecialtiesInput> | doctorSpecialtiesCreateWithoutSpecialtiesInput[] | doctorSpecialtiesUncheckedCreateWithoutSpecialtiesInput[]
    connectOrCreate?: doctorSpecialtiesCreateOrConnectWithoutSpecialtiesInput | doctorSpecialtiesCreateOrConnectWithoutSpecialtiesInput[]
    upsert?: doctorSpecialtiesUpsertWithWhereUniqueWithoutSpecialtiesInput | doctorSpecialtiesUpsertWithWhereUniqueWithoutSpecialtiesInput[]
    createMany?: doctorSpecialtiesCreateManySpecialtiesInputEnvelope
    set?: doctorSpecialtiesWhereUniqueInput | doctorSpecialtiesWhereUniqueInput[]
    disconnect?: doctorSpecialtiesWhereUniqueInput | doctorSpecialtiesWhereUniqueInput[]
    delete?: doctorSpecialtiesWhereUniqueInput | doctorSpecialtiesWhereUniqueInput[]
    connect?: doctorSpecialtiesWhereUniqueInput | doctorSpecialtiesWhereUniqueInput[]
    update?: doctorSpecialtiesUpdateWithWhereUniqueWithoutSpecialtiesInput | doctorSpecialtiesUpdateWithWhereUniqueWithoutSpecialtiesInput[]
    updateMany?: doctorSpecialtiesUpdateManyWithWhereWithoutSpecialtiesInput | doctorSpecialtiesUpdateManyWithWhereWithoutSpecialtiesInput[]
    deleteMany?: doctorSpecialtiesScalarWhereInput | doctorSpecialtiesScalarWhereInput[]
  }

  export type doctorSpecialtiesUncheckedUpdateManyWithoutSpecialtiesNestedInput = {
    create?: XOR<doctorSpecialtiesCreateWithoutSpecialtiesInput, doctorSpecialtiesUncheckedCreateWithoutSpecialtiesInput> | doctorSpecialtiesCreateWithoutSpecialtiesInput[] | doctorSpecialtiesUncheckedCreateWithoutSpecialtiesInput[]
    connectOrCreate?: doctorSpecialtiesCreateOrConnectWithoutSpecialtiesInput | doctorSpecialtiesCreateOrConnectWithoutSpecialtiesInput[]
    upsert?: doctorSpecialtiesUpsertWithWhereUniqueWithoutSpecialtiesInput | doctorSpecialtiesUpsertWithWhereUniqueWithoutSpecialtiesInput[]
    createMany?: doctorSpecialtiesCreateManySpecialtiesInputEnvelope
    set?: doctorSpecialtiesWhereUniqueInput | doctorSpecialtiesWhereUniqueInput[]
    disconnect?: doctorSpecialtiesWhereUniqueInput | doctorSpecialtiesWhereUniqueInput[]
    delete?: doctorSpecialtiesWhereUniqueInput | doctorSpecialtiesWhereUniqueInput[]
    connect?: doctorSpecialtiesWhereUniqueInput | doctorSpecialtiesWhereUniqueInput[]
    update?: doctorSpecialtiesUpdateWithWhereUniqueWithoutSpecialtiesInput | doctorSpecialtiesUpdateWithWhereUniqueWithoutSpecialtiesInput[]
    updateMany?: doctorSpecialtiesUpdateManyWithWhereWithoutSpecialtiesInput | doctorSpecialtiesUpdateManyWithWhereWithoutSpecialtiesInput[]
    deleteMany?: doctorSpecialtiesScalarWhereInput | doctorSpecialtiesScalarWhereInput[]
  }

  export type SpecialtiesCreateNestedOneWithoutDoctorSpecialtiesInput = {
    create?: XOR<SpecialtiesCreateWithoutDoctorSpecialtiesInput, SpecialtiesUncheckedCreateWithoutDoctorSpecialtiesInput>
    connectOrCreate?: SpecialtiesCreateOrConnectWithoutDoctorSpecialtiesInput
    connect?: SpecialtiesWhereUniqueInput
  }

  export type DoctorCreateNestedOneWithoutDoctorSpecialtiesInput = {
    create?: XOR<DoctorCreateWithoutDoctorSpecialtiesInput, DoctorUncheckedCreateWithoutDoctorSpecialtiesInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutDoctorSpecialtiesInput
    connect?: DoctorWhereUniqueInput
  }

  export type SpecialtiesUpdateOneRequiredWithoutDoctorSpecialtiesNestedInput = {
    create?: XOR<SpecialtiesCreateWithoutDoctorSpecialtiesInput, SpecialtiesUncheckedCreateWithoutDoctorSpecialtiesInput>
    connectOrCreate?: SpecialtiesCreateOrConnectWithoutDoctorSpecialtiesInput
    upsert?: SpecialtiesUpsertWithoutDoctorSpecialtiesInput
    connect?: SpecialtiesWhereUniqueInput
    update?: XOR<XOR<SpecialtiesUpdateToOneWithWhereWithoutDoctorSpecialtiesInput, SpecialtiesUpdateWithoutDoctorSpecialtiesInput>, SpecialtiesUncheckedUpdateWithoutDoctorSpecialtiesInput>
  }

  export type DoctorUpdateOneRequiredWithoutDoctorSpecialtiesNestedInput = {
    create?: XOR<DoctorCreateWithoutDoctorSpecialtiesInput, DoctorUncheckedCreateWithoutDoctorSpecialtiesInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutDoctorSpecialtiesInput
    upsert?: DoctorUpsertWithoutDoctorSpecialtiesInput
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutDoctorSpecialtiesInput, DoctorUpdateWithoutDoctorSpecialtiesInput>, DoctorUncheckedUpdateWithoutDoctorSpecialtiesInput>
  }

  export type PatientCreateNestedOneWithoutPatientHealthDataInput = {
    create?: XOR<PatientCreateWithoutPatientHealthDataInput, PatientUncheckedCreateWithoutPatientHealthDataInput>
    connectOrCreate?: PatientCreateOrConnectWithoutPatientHealthDataInput
    connect?: PatientWhereUniqueInput
  }

  export type EnumBloodGroupFieldUpdateOperationsInput = {
    set?: $Enums.BloodGroup
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type EnumMaritalStatusFieldUpdateOperationsInput = {
    set?: $Enums.MaritalStatus
  }

  export type PatientUpdateOneRequiredWithoutPatientHealthDataNestedInput = {
    create?: XOR<PatientCreateWithoutPatientHealthDataInput, PatientUncheckedCreateWithoutPatientHealthDataInput>
    connectOrCreate?: PatientCreateOrConnectWithoutPatientHealthDataInput
    upsert?: PatientUpsertWithoutPatientHealthDataInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutPatientHealthDataInput, PatientUpdateWithoutPatientHealthDataInput>, PatientUncheckedUpdateWithoutPatientHealthDataInput>
  }

  export type PatientCreateNestedOneWithoutMedicalReportsInput = {
    create?: XOR<PatientCreateWithoutMedicalReportsInput, PatientUncheckedCreateWithoutMedicalReportsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutMedicalReportsInput
    connect?: PatientWhereUniqueInput
  }

  export type PatientUpdateOneRequiredWithoutMedicalReportsNestedInput = {
    create?: XOR<PatientCreateWithoutMedicalReportsInput, PatientUncheckedCreateWithoutMedicalReportsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutMedicalReportsInput
    upsert?: PatientUpsertWithoutMedicalReportsInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutMedicalReportsInput, PatientUpdateWithoutMedicalReportsInput>, PatientUncheckedUpdateWithoutMedicalReportsInput>
  }

  export type DoctorSchedulesCreateNestedManyWithoutScheduleInput = {
    create?: XOR<DoctorSchedulesCreateWithoutScheduleInput, DoctorSchedulesUncheckedCreateWithoutScheduleInput> | DoctorSchedulesCreateWithoutScheduleInput[] | DoctorSchedulesUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: DoctorSchedulesCreateOrConnectWithoutScheduleInput | DoctorSchedulesCreateOrConnectWithoutScheduleInput[]
    createMany?: DoctorSchedulesCreateManyScheduleInputEnvelope
    connect?: DoctorSchedulesWhereUniqueInput | DoctorSchedulesWhereUniqueInput[]
  }

  export type DoctorSchedulesUncheckedCreateNestedManyWithoutScheduleInput = {
    create?: XOR<DoctorSchedulesCreateWithoutScheduleInput, DoctorSchedulesUncheckedCreateWithoutScheduleInput> | DoctorSchedulesCreateWithoutScheduleInput[] | DoctorSchedulesUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: DoctorSchedulesCreateOrConnectWithoutScheduleInput | DoctorSchedulesCreateOrConnectWithoutScheduleInput[]
    createMany?: DoctorSchedulesCreateManyScheduleInputEnvelope
    connect?: DoctorSchedulesWhereUniqueInput | DoctorSchedulesWhereUniqueInput[]
  }

  export type DoctorSchedulesUpdateManyWithoutScheduleNestedInput = {
    create?: XOR<DoctorSchedulesCreateWithoutScheduleInput, DoctorSchedulesUncheckedCreateWithoutScheduleInput> | DoctorSchedulesCreateWithoutScheduleInput[] | DoctorSchedulesUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: DoctorSchedulesCreateOrConnectWithoutScheduleInput | DoctorSchedulesCreateOrConnectWithoutScheduleInput[]
    upsert?: DoctorSchedulesUpsertWithWhereUniqueWithoutScheduleInput | DoctorSchedulesUpsertWithWhereUniqueWithoutScheduleInput[]
    createMany?: DoctorSchedulesCreateManyScheduleInputEnvelope
    set?: DoctorSchedulesWhereUniqueInput | DoctorSchedulesWhereUniqueInput[]
    disconnect?: DoctorSchedulesWhereUniqueInput | DoctorSchedulesWhereUniqueInput[]
    delete?: DoctorSchedulesWhereUniqueInput | DoctorSchedulesWhereUniqueInput[]
    connect?: DoctorSchedulesWhereUniqueInput | DoctorSchedulesWhereUniqueInput[]
    update?: DoctorSchedulesUpdateWithWhereUniqueWithoutScheduleInput | DoctorSchedulesUpdateWithWhereUniqueWithoutScheduleInput[]
    updateMany?: DoctorSchedulesUpdateManyWithWhereWithoutScheduleInput | DoctorSchedulesUpdateManyWithWhereWithoutScheduleInput[]
    deleteMany?: DoctorSchedulesScalarWhereInput | DoctorSchedulesScalarWhereInput[]
  }

  export type DoctorSchedulesUncheckedUpdateManyWithoutScheduleNestedInput = {
    create?: XOR<DoctorSchedulesCreateWithoutScheduleInput, DoctorSchedulesUncheckedCreateWithoutScheduleInput> | DoctorSchedulesCreateWithoutScheduleInput[] | DoctorSchedulesUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: DoctorSchedulesCreateOrConnectWithoutScheduleInput | DoctorSchedulesCreateOrConnectWithoutScheduleInput[]
    upsert?: DoctorSchedulesUpsertWithWhereUniqueWithoutScheduleInput | DoctorSchedulesUpsertWithWhereUniqueWithoutScheduleInput[]
    createMany?: DoctorSchedulesCreateManyScheduleInputEnvelope
    set?: DoctorSchedulesWhereUniqueInput | DoctorSchedulesWhereUniqueInput[]
    disconnect?: DoctorSchedulesWhereUniqueInput | DoctorSchedulesWhereUniqueInput[]
    delete?: DoctorSchedulesWhereUniqueInput | DoctorSchedulesWhereUniqueInput[]
    connect?: DoctorSchedulesWhereUniqueInput | DoctorSchedulesWhereUniqueInput[]
    update?: DoctorSchedulesUpdateWithWhereUniqueWithoutScheduleInput | DoctorSchedulesUpdateWithWhereUniqueWithoutScheduleInput[]
    updateMany?: DoctorSchedulesUpdateManyWithWhereWithoutScheduleInput | DoctorSchedulesUpdateManyWithWhereWithoutScheduleInput[]
    deleteMany?: DoctorSchedulesScalarWhereInput | DoctorSchedulesScalarWhereInput[]
  }

  export type DoctorCreateNestedOneWithoutDoctorSchedulesInput = {
    create?: XOR<DoctorCreateWithoutDoctorSchedulesInput, DoctorUncheckedCreateWithoutDoctorSchedulesInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutDoctorSchedulesInput
    connect?: DoctorWhereUniqueInput
  }

  export type ScheduleCreateNestedOneWithoutDoctorSchedulesInput = {
    create?: XOR<ScheduleCreateWithoutDoctorSchedulesInput, ScheduleUncheckedCreateWithoutDoctorSchedulesInput>
    connectOrCreate?: ScheduleCreateOrConnectWithoutDoctorSchedulesInput
    connect?: ScheduleWhereUniqueInput
  }

  export type DoctorUpdateOneRequiredWithoutDoctorSchedulesNestedInput = {
    create?: XOR<DoctorCreateWithoutDoctorSchedulesInput, DoctorUncheckedCreateWithoutDoctorSchedulesInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutDoctorSchedulesInput
    upsert?: DoctorUpsertWithoutDoctorSchedulesInput
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutDoctorSchedulesInput, DoctorUpdateWithoutDoctorSchedulesInput>, DoctorUncheckedUpdateWithoutDoctorSchedulesInput>
  }

  export type ScheduleUpdateOneRequiredWithoutDoctorSchedulesNestedInput = {
    create?: XOR<ScheduleCreateWithoutDoctorSchedulesInput, ScheduleUncheckedCreateWithoutDoctorSchedulesInput>
    connectOrCreate?: ScheduleCreateOrConnectWithoutDoctorSchedulesInput
    upsert?: ScheduleUpsertWithoutDoctorSchedulesInput
    connect?: ScheduleWhereUniqueInput
    update?: XOR<XOR<ScheduleUpdateToOneWithWhereWithoutDoctorSchedulesInput, ScheduleUpdateWithoutDoctorSchedulesInput>, ScheduleUncheckedUpdateWithoutDoctorSchedulesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedEnumBloodGroupFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodGroup | EnumBloodGroupFieldRefInput<$PrismaModel>
    in?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel>
    notIn?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel>
    not?: NestedEnumBloodGroupFilter<$PrismaModel> | $Enums.BloodGroup
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedEnumMaritalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MaritalStatus | EnumMaritalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMaritalStatusFilter<$PrismaModel> | $Enums.MaritalStatus
  }

  export type NestedEnumBloodGroupWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodGroup | EnumBloodGroupFieldRefInput<$PrismaModel>
    in?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel>
    notIn?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel>
    not?: NestedEnumBloodGroupWithAggregatesFilter<$PrismaModel> | $Enums.BloodGroup
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBloodGroupFilter<$PrismaModel>
    _max?: NestedEnumBloodGroupFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumMaritalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MaritalStatus | EnumMaritalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMaritalStatusWithAggregatesFilter<$PrismaModel> | $Enums.MaritalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMaritalStatusFilter<$PrismaModel>
    _max?: NestedEnumMaritalStatusFilter<$PrismaModel>
  }

  export type AdminCreateWithoutUserInput = {
    id?: string
    name: string
    profilePhoto?: string | null
    contactNumber: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    profilePhoto?: string | null
    contactNumber: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminCreateOrConnectWithoutUserInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
  }

  export type DoctorCreateWithoutUserInput = {
    id?: string
    name: string
    profilePhoto?: string | null
    contactNumber: string
    address?: string | null
    registrationNumber: string
    experience?: number
    gender: $Enums.Gender
    appointmentFee: number
    qualification: string
    currentWorkPlace: string
    designation: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    doctorSpecialties?: doctorSpecialtiesCreateNestedManyWithoutDoctorInput
    doctorSchedules?: DoctorSchedulesCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    profilePhoto?: string | null
    contactNumber: string
    address?: string | null
    registrationNumber: string
    experience?: number
    gender: $Enums.Gender
    appointmentFee: number
    qualification: string
    currentWorkPlace: string
    designation: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    doctorSpecialties?: doctorSpecialtiesUncheckedCreateNestedManyWithoutDoctorInput
    doctorSchedules?: DoctorSchedulesUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorCreateOrConnectWithoutUserInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
  }

  export type PatientCreateWithoutUserInput = {
    id?: string
    name: string
    profilePhoto?: string | null
    contactNumber?: string | null
    address?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    patientHealthData?: PatientHealthDataCreateNestedOneWithoutPatientInput
    medicalReports?: MedicalReportCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    profilePhoto?: string | null
    contactNumber?: string | null
    address?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    patientHealthData?: PatientHealthDataUncheckedCreateNestedOneWithoutPatientInput
    medicalReports?: MedicalReportUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutUserInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
  }

  export type AdminUpsertWithoutUserInput = {
    update: XOR<AdminUpdateWithoutUserInput, AdminUncheckedUpdateWithoutUserInput>
    create: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutUserInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutUserInput, AdminUncheckedUpdateWithoutUserInput>
  }

  export type AdminUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorUpsertWithoutUserInput = {
    update: XOR<DoctorUpdateWithoutUserInput, DoctorUncheckedUpdateWithoutUserInput>
    create: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
    where?: DoctorWhereInput
  }

  export type DoctorUpdateToOneWithWhereWithoutUserInput = {
    where?: DoctorWhereInput
    data: XOR<DoctorUpdateWithoutUserInput, DoctorUncheckedUpdateWithoutUserInput>
  }

  export type DoctorUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNumber?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    appointmentFee?: IntFieldUpdateOperationsInput | number
    qualification?: StringFieldUpdateOperationsInput | string
    currentWorkPlace?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorSpecialties?: doctorSpecialtiesUpdateManyWithoutDoctorNestedInput
    doctorSchedules?: DoctorSchedulesUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNumber?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    appointmentFee?: IntFieldUpdateOperationsInput | number
    qualification?: StringFieldUpdateOperationsInput | string
    currentWorkPlace?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorSpecialties?: doctorSpecialtiesUncheckedUpdateManyWithoutDoctorNestedInput
    doctorSchedules?: DoctorSchedulesUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type PatientUpsertWithoutUserInput = {
    update: XOR<PatientUpdateWithoutUserInput, PatientUncheckedUpdateWithoutUserInput>
    create: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutUserInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutUserInput, PatientUncheckedUpdateWithoutUserInput>
  }

  export type PatientUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientHealthData?: PatientHealthDataUpdateOneWithoutPatientNestedInput
    medicalReports?: MedicalReportUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientHealthData?: PatientHealthDataUncheckedUpdateOneWithoutPatientNestedInput
    medicalReports?: MedicalReportUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type UserCreateWithoutAdminInput = {
    id?: string
    email: string
    password: string
    role: $Enums.UserRole
    needPasswordChange?: boolean
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    doctor?: DoctorCreateNestedOneWithoutUserInput
    patient?: PatientCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAdminInput = {
    id?: string
    email: string
    password: string
    role: $Enums.UserRole
    needPasswordChange?: boolean
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    doctor?: DoctorUncheckedCreateNestedOneWithoutUserInput
    patient?: PatientUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAdminInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
  }

  export type UserUpsertWithoutAdminInput = {
    update: XOR<UserUpdateWithoutAdminInput, UserUncheckedUpdateWithoutAdminInput>
    create: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAdminInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAdminInput, UserUncheckedUpdateWithoutAdminInput>
  }

  export type UserUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    needPasswordChange?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorUpdateOneWithoutUserNestedInput
    patient?: PatientUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    needPasswordChange?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorUncheckedUpdateOneWithoutUserNestedInput
    patient?: PatientUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutDoctorInput = {
    id?: string
    email: string
    password: string
    role: $Enums.UserRole
    needPasswordChange?: boolean
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    admin?: AdminCreateNestedOneWithoutUserInput
    patient?: PatientCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDoctorInput = {
    id?: string
    email: string
    password: string
    role: $Enums.UserRole
    needPasswordChange?: boolean
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    admin?: AdminUncheckedCreateNestedOneWithoutUserInput
    patient?: PatientUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDoctorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDoctorInput, UserUncheckedCreateWithoutDoctorInput>
  }

  export type doctorSpecialtiesCreateWithoutDoctorInput = {
    specialties: SpecialtiesCreateNestedOneWithoutDoctorSpecialtiesInput
  }

  export type doctorSpecialtiesUncheckedCreateWithoutDoctorInput = {
    specialtiesId: string
  }

  export type doctorSpecialtiesCreateOrConnectWithoutDoctorInput = {
    where: doctorSpecialtiesWhereUniqueInput
    create: XOR<doctorSpecialtiesCreateWithoutDoctorInput, doctorSpecialtiesUncheckedCreateWithoutDoctorInput>
  }

  export type doctorSpecialtiesCreateManyDoctorInputEnvelope = {
    data: doctorSpecialtiesCreateManyDoctorInput | doctorSpecialtiesCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type DoctorSchedulesCreateWithoutDoctorInput = {
    isBooked?: boolean
    appointmentId?: string | null
    schedule: ScheduleCreateNestedOneWithoutDoctorSchedulesInput
  }

  export type DoctorSchedulesUncheckedCreateWithoutDoctorInput = {
    scheduleId: string
    isBooked?: boolean
    appointmentId?: string | null
  }

  export type DoctorSchedulesCreateOrConnectWithoutDoctorInput = {
    where: DoctorSchedulesWhereUniqueInput
    create: XOR<DoctorSchedulesCreateWithoutDoctorInput, DoctorSchedulesUncheckedCreateWithoutDoctorInput>
  }

  export type DoctorSchedulesCreateManyDoctorInputEnvelope = {
    data: DoctorSchedulesCreateManyDoctorInput | DoctorSchedulesCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutDoctorInput = {
    update: XOR<UserUpdateWithoutDoctorInput, UserUncheckedUpdateWithoutDoctorInput>
    create: XOR<UserCreateWithoutDoctorInput, UserUncheckedCreateWithoutDoctorInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDoctorInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDoctorInput, UserUncheckedUpdateWithoutDoctorInput>
  }

  export type UserUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    needPasswordChange?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUpdateOneWithoutUserNestedInput
    patient?: PatientUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    needPasswordChange?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
    patient?: PatientUncheckedUpdateOneWithoutUserNestedInput
  }

  export type doctorSpecialtiesUpsertWithWhereUniqueWithoutDoctorInput = {
    where: doctorSpecialtiesWhereUniqueInput
    update: XOR<doctorSpecialtiesUpdateWithoutDoctorInput, doctorSpecialtiesUncheckedUpdateWithoutDoctorInput>
    create: XOR<doctorSpecialtiesCreateWithoutDoctorInput, doctorSpecialtiesUncheckedCreateWithoutDoctorInput>
  }

  export type doctorSpecialtiesUpdateWithWhereUniqueWithoutDoctorInput = {
    where: doctorSpecialtiesWhereUniqueInput
    data: XOR<doctorSpecialtiesUpdateWithoutDoctorInput, doctorSpecialtiesUncheckedUpdateWithoutDoctorInput>
  }

  export type doctorSpecialtiesUpdateManyWithWhereWithoutDoctorInput = {
    where: doctorSpecialtiesScalarWhereInput
    data: XOR<doctorSpecialtiesUpdateManyMutationInput, doctorSpecialtiesUncheckedUpdateManyWithoutDoctorInput>
  }

  export type doctorSpecialtiesScalarWhereInput = {
    AND?: doctorSpecialtiesScalarWhereInput | doctorSpecialtiesScalarWhereInput[]
    OR?: doctorSpecialtiesScalarWhereInput[]
    NOT?: doctorSpecialtiesScalarWhereInput | doctorSpecialtiesScalarWhereInput[]
    specialtiesId?: StringFilter<"doctorSpecialties"> | string
    doctorId?: StringFilter<"doctorSpecialties"> | string
  }

  export type DoctorSchedulesUpsertWithWhereUniqueWithoutDoctorInput = {
    where: DoctorSchedulesWhereUniqueInput
    update: XOR<DoctorSchedulesUpdateWithoutDoctorInput, DoctorSchedulesUncheckedUpdateWithoutDoctorInput>
    create: XOR<DoctorSchedulesCreateWithoutDoctorInput, DoctorSchedulesUncheckedCreateWithoutDoctorInput>
  }

  export type DoctorSchedulesUpdateWithWhereUniqueWithoutDoctorInput = {
    where: DoctorSchedulesWhereUniqueInput
    data: XOR<DoctorSchedulesUpdateWithoutDoctorInput, DoctorSchedulesUncheckedUpdateWithoutDoctorInput>
  }

  export type DoctorSchedulesUpdateManyWithWhereWithoutDoctorInput = {
    where: DoctorSchedulesScalarWhereInput
    data: XOR<DoctorSchedulesUpdateManyMutationInput, DoctorSchedulesUncheckedUpdateManyWithoutDoctorInput>
  }

  export type DoctorSchedulesScalarWhereInput = {
    AND?: DoctorSchedulesScalarWhereInput | DoctorSchedulesScalarWhereInput[]
    OR?: DoctorSchedulesScalarWhereInput[]
    NOT?: DoctorSchedulesScalarWhereInput | DoctorSchedulesScalarWhereInput[]
    doctorId?: StringFilter<"DoctorSchedules"> | string
    scheduleId?: StringFilter<"DoctorSchedules"> | string
    isBooked?: BoolFilter<"DoctorSchedules"> | boolean
    appointmentId?: StringNullableFilter<"DoctorSchedules"> | string | null
  }

  export type PatientHealthDataCreateWithoutPatientInput = {
    id?: string
    gender: $Enums.Gender
    dateOfBirth: string
    bloodGroup: $Enums.BloodGroup
    hasAllergies?: boolean | null
    hasDiabetes?: boolean | null
    height: string
    weight: string
    smokingStatus?: boolean | null
    dietaryPreferences?: string | null
    pregnancyStatus?: boolean | null
    mentalHealthHistory?: string | null
    immunizationStatus?: string | null
    hasPastSurgeries?: boolean | null
    recentAnxiety?: boolean | null
    recentDepression?: boolean | null
    maritalStatus?: $Enums.MaritalStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientHealthDataUncheckedCreateWithoutPatientInput = {
    id?: string
    gender: $Enums.Gender
    dateOfBirth: string
    bloodGroup: $Enums.BloodGroup
    hasAllergies?: boolean | null
    hasDiabetes?: boolean | null
    height: string
    weight: string
    smokingStatus?: boolean | null
    dietaryPreferences?: string | null
    pregnancyStatus?: boolean | null
    mentalHealthHistory?: string | null
    immunizationStatus?: string | null
    hasPastSurgeries?: boolean | null
    recentAnxiety?: boolean | null
    recentDepression?: boolean | null
    maritalStatus?: $Enums.MaritalStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientHealthDataCreateOrConnectWithoutPatientInput = {
    where: PatientHealthDataWhereUniqueInput
    create: XOR<PatientHealthDataCreateWithoutPatientInput, PatientHealthDataUncheckedCreateWithoutPatientInput>
  }

  export type MedicalReportCreateWithoutPatientInput = {
    id?: string
    reportName: string
    reportLink: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicalReportUncheckedCreateWithoutPatientInput = {
    id?: string
    reportName: string
    reportLink: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicalReportCreateOrConnectWithoutPatientInput = {
    where: MedicalReportWhereUniqueInput
    create: XOR<MedicalReportCreateWithoutPatientInput, MedicalReportUncheckedCreateWithoutPatientInput>
  }

  export type MedicalReportCreateManyPatientInputEnvelope = {
    data: MedicalReportCreateManyPatientInput | MedicalReportCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutPatientInput = {
    id?: string
    email: string
    password: string
    role: $Enums.UserRole
    needPasswordChange?: boolean
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    admin?: AdminCreateNestedOneWithoutUserInput
    doctor?: DoctorCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPatientInput = {
    id?: string
    email: string
    password: string
    role: $Enums.UserRole
    needPasswordChange?: boolean
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    admin?: AdminUncheckedCreateNestedOneWithoutUserInput
    doctor?: DoctorUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPatientInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPatientInput, UserUncheckedCreateWithoutPatientInput>
  }

  export type PatientHealthDataUpsertWithoutPatientInput = {
    update: XOR<PatientHealthDataUpdateWithoutPatientInput, PatientHealthDataUncheckedUpdateWithoutPatientInput>
    create: XOR<PatientHealthDataCreateWithoutPatientInput, PatientHealthDataUncheckedCreateWithoutPatientInput>
    where?: PatientHealthDataWhereInput
  }

  export type PatientHealthDataUpdateToOneWithWhereWithoutPatientInput = {
    where?: PatientHealthDataWhereInput
    data: XOR<PatientHealthDataUpdateWithoutPatientInput, PatientHealthDataUncheckedUpdateWithoutPatientInput>
  }

  export type PatientHealthDataUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dateOfBirth?: StringFieldUpdateOperationsInput | string
    bloodGroup?: EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup
    hasAllergies?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hasDiabetes?: NullableBoolFieldUpdateOperationsInput | boolean | null
    height?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    smokingStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dietaryPreferences?: NullableStringFieldUpdateOperationsInput | string | null
    pregnancyStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mentalHealthHistory?: NullableStringFieldUpdateOperationsInput | string | null
    immunizationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    hasPastSurgeries?: NullableBoolFieldUpdateOperationsInput | boolean | null
    recentAnxiety?: NullableBoolFieldUpdateOperationsInput | boolean | null
    recentDepression?: NullableBoolFieldUpdateOperationsInput | boolean | null
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientHealthDataUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dateOfBirth?: StringFieldUpdateOperationsInput | string
    bloodGroup?: EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup
    hasAllergies?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hasDiabetes?: NullableBoolFieldUpdateOperationsInput | boolean | null
    height?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    smokingStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dietaryPreferences?: NullableStringFieldUpdateOperationsInput | string | null
    pregnancyStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mentalHealthHistory?: NullableStringFieldUpdateOperationsInput | string | null
    immunizationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    hasPastSurgeries?: NullableBoolFieldUpdateOperationsInput | boolean | null
    recentAnxiety?: NullableBoolFieldUpdateOperationsInput | boolean | null
    recentDepression?: NullableBoolFieldUpdateOperationsInput | boolean | null
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalReportUpsertWithWhereUniqueWithoutPatientInput = {
    where: MedicalReportWhereUniqueInput
    update: XOR<MedicalReportUpdateWithoutPatientInput, MedicalReportUncheckedUpdateWithoutPatientInput>
    create: XOR<MedicalReportCreateWithoutPatientInput, MedicalReportUncheckedCreateWithoutPatientInput>
  }

  export type MedicalReportUpdateWithWhereUniqueWithoutPatientInput = {
    where: MedicalReportWhereUniqueInput
    data: XOR<MedicalReportUpdateWithoutPatientInput, MedicalReportUncheckedUpdateWithoutPatientInput>
  }

  export type MedicalReportUpdateManyWithWhereWithoutPatientInput = {
    where: MedicalReportScalarWhereInput
    data: XOR<MedicalReportUpdateManyMutationInput, MedicalReportUncheckedUpdateManyWithoutPatientInput>
  }

  export type MedicalReportScalarWhereInput = {
    AND?: MedicalReportScalarWhereInput | MedicalReportScalarWhereInput[]
    OR?: MedicalReportScalarWhereInput[]
    NOT?: MedicalReportScalarWhereInput | MedicalReportScalarWhereInput[]
    id?: StringFilter<"MedicalReport"> | string
    patientId?: StringFilter<"MedicalReport"> | string
    reportName?: StringFilter<"MedicalReport"> | string
    reportLink?: StringFilter<"MedicalReport"> | string
    createdAt?: DateTimeFilter<"MedicalReport"> | Date | string
    updatedAt?: DateTimeFilter<"MedicalReport"> | Date | string
  }

  export type UserUpsertWithoutPatientInput = {
    update: XOR<UserUpdateWithoutPatientInput, UserUncheckedUpdateWithoutPatientInput>
    create: XOR<UserCreateWithoutPatientInput, UserUncheckedCreateWithoutPatientInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPatientInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPatientInput, UserUncheckedUpdateWithoutPatientInput>
  }

  export type UserUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    needPasswordChange?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUpdateOneWithoutUserNestedInput
    doctor?: DoctorUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    needPasswordChange?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
    doctor?: DoctorUncheckedUpdateOneWithoutUserNestedInput
  }

  export type doctorSpecialtiesCreateWithoutSpecialtiesInput = {
    doctor: DoctorCreateNestedOneWithoutDoctorSpecialtiesInput
  }

  export type doctorSpecialtiesUncheckedCreateWithoutSpecialtiesInput = {
    doctorId: string
  }

  export type doctorSpecialtiesCreateOrConnectWithoutSpecialtiesInput = {
    where: doctorSpecialtiesWhereUniqueInput
    create: XOR<doctorSpecialtiesCreateWithoutSpecialtiesInput, doctorSpecialtiesUncheckedCreateWithoutSpecialtiesInput>
  }

  export type doctorSpecialtiesCreateManySpecialtiesInputEnvelope = {
    data: doctorSpecialtiesCreateManySpecialtiesInput | doctorSpecialtiesCreateManySpecialtiesInput[]
    skipDuplicates?: boolean
  }

  export type doctorSpecialtiesUpsertWithWhereUniqueWithoutSpecialtiesInput = {
    where: doctorSpecialtiesWhereUniqueInput
    update: XOR<doctorSpecialtiesUpdateWithoutSpecialtiesInput, doctorSpecialtiesUncheckedUpdateWithoutSpecialtiesInput>
    create: XOR<doctorSpecialtiesCreateWithoutSpecialtiesInput, doctorSpecialtiesUncheckedCreateWithoutSpecialtiesInput>
  }

  export type doctorSpecialtiesUpdateWithWhereUniqueWithoutSpecialtiesInput = {
    where: doctorSpecialtiesWhereUniqueInput
    data: XOR<doctorSpecialtiesUpdateWithoutSpecialtiesInput, doctorSpecialtiesUncheckedUpdateWithoutSpecialtiesInput>
  }

  export type doctorSpecialtiesUpdateManyWithWhereWithoutSpecialtiesInput = {
    where: doctorSpecialtiesScalarWhereInput
    data: XOR<doctorSpecialtiesUpdateManyMutationInput, doctorSpecialtiesUncheckedUpdateManyWithoutSpecialtiesInput>
  }

  export type SpecialtiesCreateWithoutDoctorSpecialtiesInput = {
    id?: string
    title: string
    icon: string
  }

  export type SpecialtiesUncheckedCreateWithoutDoctorSpecialtiesInput = {
    id?: string
    title: string
    icon: string
  }

  export type SpecialtiesCreateOrConnectWithoutDoctorSpecialtiesInput = {
    where: SpecialtiesWhereUniqueInput
    create: XOR<SpecialtiesCreateWithoutDoctorSpecialtiesInput, SpecialtiesUncheckedCreateWithoutDoctorSpecialtiesInput>
  }

  export type DoctorCreateWithoutDoctorSpecialtiesInput = {
    id?: string
    name: string
    profilePhoto?: string | null
    contactNumber: string
    address?: string | null
    registrationNumber: string
    experience?: number
    gender: $Enums.Gender
    appointmentFee: number
    qualification: string
    currentWorkPlace: string
    designation: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDoctorInput
    doctorSchedules?: DoctorSchedulesCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateWithoutDoctorSpecialtiesInput = {
    id?: string
    name: string
    profilePhoto?: string | null
    contactNumber: string
    address?: string | null
    registrationNumber: string
    experience?: number
    gender: $Enums.Gender
    appointmentFee: number
    qualification: string
    currentWorkPlace: string
    designation: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    doctorSchedules?: DoctorSchedulesUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorCreateOrConnectWithoutDoctorSpecialtiesInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutDoctorSpecialtiesInput, DoctorUncheckedCreateWithoutDoctorSpecialtiesInput>
  }

  export type SpecialtiesUpsertWithoutDoctorSpecialtiesInput = {
    update: XOR<SpecialtiesUpdateWithoutDoctorSpecialtiesInput, SpecialtiesUncheckedUpdateWithoutDoctorSpecialtiesInput>
    create: XOR<SpecialtiesCreateWithoutDoctorSpecialtiesInput, SpecialtiesUncheckedCreateWithoutDoctorSpecialtiesInput>
    where?: SpecialtiesWhereInput
  }

  export type SpecialtiesUpdateToOneWithWhereWithoutDoctorSpecialtiesInput = {
    where?: SpecialtiesWhereInput
    data: XOR<SpecialtiesUpdateWithoutDoctorSpecialtiesInput, SpecialtiesUncheckedUpdateWithoutDoctorSpecialtiesInput>
  }

  export type SpecialtiesUpdateWithoutDoctorSpecialtiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
  }

  export type SpecialtiesUncheckedUpdateWithoutDoctorSpecialtiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
  }

  export type DoctorUpsertWithoutDoctorSpecialtiesInput = {
    update: XOR<DoctorUpdateWithoutDoctorSpecialtiesInput, DoctorUncheckedUpdateWithoutDoctorSpecialtiesInput>
    create: XOR<DoctorCreateWithoutDoctorSpecialtiesInput, DoctorUncheckedCreateWithoutDoctorSpecialtiesInput>
    where?: DoctorWhereInput
  }

  export type DoctorUpdateToOneWithWhereWithoutDoctorSpecialtiesInput = {
    where?: DoctorWhereInput
    data: XOR<DoctorUpdateWithoutDoctorSpecialtiesInput, DoctorUncheckedUpdateWithoutDoctorSpecialtiesInput>
  }

  export type DoctorUpdateWithoutDoctorSpecialtiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNumber?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    appointmentFee?: IntFieldUpdateOperationsInput | number
    qualification?: StringFieldUpdateOperationsInput | string
    currentWorkPlace?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDoctorNestedInput
    doctorSchedules?: DoctorSchedulesUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateWithoutDoctorSpecialtiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNumber?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    appointmentFee?: IntFieldUpdateOperationsInput | number
    qualification?: StringFieldUpdateOperationsInput | string
    currentWorkPlace?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    doctorSchedules?: DoctorSchedulesUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type PatientCreateWithoutPatientHealthDataInput = {
    id?: string
    name: string
    profilePhoto?: string | null
    contactNumber?: string | null
    address?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    medicalReports?: MedicalReportCreateNestedManyWithoutPatientInput
    user: UserCreateNestedOneWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutPatientHealthDataInput = {
    id?: string
    email: string
    name: string
    profilePhoto?: string | null
    contactNumber?: string | null
    address?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    medicalReports?: MedicalReportUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutPatientHealthDataInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutPatientHealthDataInput, PatientUncheckedCreateWithoutPatientHealthDataInput>
  }

  export type PatientUpsertWithoutPatientHealthDataInput = {
    update: XOR<PatientUpdateWithoutPatientHealthDataInput, PatientUncheckedUpdateWithoutPatientHealthDataInput>
    create: XOR<PatientCreateWithoutPatientHealthDataInput, PatientUncheckedCreateWithoutPatientHealthDataInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutPatientHealthDataInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutPatientHealthDataInput, PatientUncheckedUpdateWithoutPatientHealthDataInput>
  }

  export type PatientUpdateWithoutPatientHealthDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicalReports?: MedicalReportUpdateManyWithoutPatientNestedInput
    user?: UserUpdateOneRequiredWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutPatientHealthDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicalReports?: MedicalReportUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientCreateWithoutMedicalReportsInput = {
    id?: string
    name: string
    profilePhoto?: string | null
    contactNumber?: string | null
    address?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    patientHealthData?: PatientHealthDataCreateNestedOneWithoutPatientInput
    user: UserCreateNestedOneWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutMedicalReportsInput = {
    id?: string
    email: string
    name: string
    profilePhoto?: string | null
    contactNumber?: string | null
    address?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    patientHealthData?: PatientHealthDataUncheckedCreateNestedOneWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutMedicalReportsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutMedicalReportsInput, PatientUncheckedCreateWithoutMedicalReportsInput>
  }

  export type PatientUpsertWithoutMedicalReportsInput = {
    update: XOR<PatientUpdateWithoutMedicalReportsInput, PatientUncheckedUpdateWithoutMedicalReportsInput>
    create: XOR<PatientCreateWithoutMedicalReportsInput, PatientUncheckedCreateWithoutMedicalReportsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutMedicalReportsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutMedicalReportsInput, PatientUncheckedUpdateWithoutMedicalReportsInput>
  }

  export type PatientUpdateWithoutMedicalReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientHealthData?: PatientHealthDataUpdateOneWithoutPatientNestedInput
    user?: UserUpdateOneRequiredWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutMedicalReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientHealthData?: PatientHealthDataUncheckedUpdateOneWithoutPatientNestedInput
  }

  export type DoctorSchedulesCreateWithoutScheduleInput = {
    isBooked?: boolean
    appointmentId?: string | null
    doctor: DoctorCreateNestedOneWithoutDoctorSchedulesInput
  }

  export type DoctorSchedulesUncheckedCreateWithoutScheduleInput = {
    doctorId: string
    isBooked?: boolean
    appointmentId?: string | null
  }

  export type DoctorSchedulesCreateOrConnectWithoutScheduleInput = {
    where: DoctorSchedulesWhereUniqueInput
    create: XOR<DoctorSchedulesCreateWithoutScheduleInput, DoctorSchedulesUncheckedCreateWithoutScheduleInput>
  }

  export type DoctorSchedulesCreateManyScheduleInputEnvelope = {
    data: DoctorSchedulesCreateManyScheduleInput | DoctorSchedulesCreateManyScheduleInput[]
    skipDuplicates?: boolean
  }

  export type DoctorSchedulesUpsertWithWhereUniqueWithoutScheduleInput = {
    where: DoctorSchedulesWhereUniqueInput
    update: XOR<DoctorSchedulesUpdateWithoutScheduleInput, DoctorSchedulesUncheckedUpdateWithoutScheduleInput>
    create: XOR<DoctorSchedulesCreateWithoutScheduleInput, DoctorSchedulesUncheckedCreateWithoutScheduleInput>
  }

  export type DoctorSchedulesUpdateWithWhereUniqueWithoutScheduleInput = {
    where: DoctorSchedulesWhereUniqueInput
    data: XOR<DoctorSchedulesUpdateWithoutScheduleInput, DoctorSchedulesUncheckedUpdateWithoutScheduleInput>
  }

  export type DoctorSchedulesUpdateManyWithWhereWithoutScheduleInput = {
    where: DoctorSchedulesScalarWhereInput
    data: XOR<DoctorSchedulesUpdateManyMutationInput, DoctorSchedulesUncheckedUpdateManyWithoutScheduleInput>
  }

  export type DoctorCreateWithoutDoctorSchedulesInput = {
    id?: string
    name: string
    profilePhoto?: string | null
    contactNumber: string
    address?: string | null
    registrationNumber: string
    experience?: number
    gender: $Enums.Gender
    appointmentFee: number
    qualification: string
    currentWorkPlace: string
    designation: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDoctorInput
    doctorSpecialties?: doctorSpecialtiesCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateWithoutDoctorSchedulesInput = {
    id?: string
    name: string
    profilePhoto?: string | null
    contactNumber: string
    address?: string | null
    registrationNumber: string
    experience?: number
    gender: $Enums.Gender
    appointmentFee: number
    qualification: string
    currentWorkPlace: string
    designation: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    doctorSpecialties?: doctorSpecialtiesUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorCreateOrConnectWithoutDoctorSchedulesInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutDoctorSchedulesInput, DoctorUncheckedCreateWithoutDoctorSchedulesInput>
  }

  export type ScheduleCreateWithoutDoctorSchedulesInput = {
    id?: string
    startDateTime: Date | string
    endDateTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleUncheckedCreateWithoutDoctorSchedulesInput = {
    id?: string
    startDateTime: Date | string
    endDateTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleCreateOrConnectWithoutDoctorSchedulesInput = {
    where: ScheduleWhereUniqueInput
    create: XOR<ScheduleCreateWithoutDoctorSchedulesInput, ScheduleUncheckedCreateWithoutDoctorSchedulesInput>
  }

  export type DoctorUpsertWithoutDoctorSchedulesInput = {
    update: XOR<DoctorUpdateWithoutDoctorSchedulesInput, DoctorUncheckedUpdateWithoutDoctorSchedulesInput>
    create: XOR<DoctorCreateWithoutDoctorSchedulesInput, DoctorUncheckedCreateWithoutDoctorSchedulesInput>
    where?: DoctorWhereInput
  }

  export type DoctorUpdateToOneWithWhereWithoutDoctorSchedulesInput = {
    where?: DoctorWhereInput
    data: XOR<DoctorUpdateWithoutDoctorSchedulesInput, DoctorUncheckedUpdateWithoutDoctorSchedulesInput>
  }

  export type DoctorUpdateWithoutDoctorSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNumber?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    appointmentFee?: IntFieldUpdateOperationsInput | number
    qualification?: StringFieldUpdateOperationsInput | string
    currentWorkPlace?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDoctorNestedInput
    doctorSpecialties?: doctorSpecialtiesUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateWithoutDoctorSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNumber?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    appointmentFee?: IntFieldUpdateOperationsInput | number
    qualification?: StringFieldUpdateOperationsInput | string
    currentWorkPlace?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    doctorSpecialties?: doctorSpecialtiesUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type ScheduleUpsertWithoutDoctorSchedulesInput = {
    update: XOR<ScheduleUpdateWithoutDoctorSchedulesInput, ScheduleUncheckedUpdateWithoutDoctorSchedulesInput>
    create: XOR<ScheduleCreateWithoutDoctorSchedulesInput, ScheduleUncheckedCreateWithoutDoctorSchedulesInput>
    where?: ScheduleWhereInput
  }

  export type ScheduleUpdateToOneWithWhereWithoutDoctorSchedulesInput = {
    where?: ScheduleWhereInput
    data: XOR<ScheduleUpdateWithoutDoctorSchedulesInput, ScheduleUncheckedUpdateWithoutDoctorSchedulesInput>
  }

  export type ScheduleUpdateWithoutDoctorSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleUncheckedUpdateWithoutDoctorSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type doctorSpecialtiesCreateManyDoctorInput = {
    specialtiesId: string
  }

  export type DoctorSchedulesCreateManyDoctorInput = {
    scheduleId: string
    isBooked?: boolean
    appointmentId?: string | null
  }

  export type doctorSpecialtiesUpdateWithoutDoctorInput = {
    specialties?: SpecialtiesUpdateOneRequiredWithoutDoctorSpecialtiesNestedInput
  }

  export type doctorSpecialtiesUncheckedUpdateWithoutDoctorInput = {
    specialtiesId?: StringFieldUpdateOperationsInput | string
  }

  export type doctorSpecialtiesUncheckedUpdateManyWithoutDoctorInput = {
    specialtiesId?: StringFieldUpdateOperationsInput | string
  }

  export type DoctorSchedulesUpdateWithoutDoctorInput = {
    isBooked?: BoolFieldUpdateOperationsInput | boolean
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
    schedule?: ScheduleUpdateOneRequiredWithoutDoctorSchedulesNestedInput
  }

  export type DoctorSchedulesUncheckedUpdateWithoutDoctorInput = {
    scheduleId?: StringFieldUpdateOperationsInput | string
    isBooked?: BoolFieldUpdateOperationsInput | boolean
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DoctorSchedulesUncheckedUpdateManyWithoutDoctorInput = {
    scheduleId?: StringFieldUpdateOperationsInput | string
    isBooked?: BoolFieldUpdateOperationsInput | boolean
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MedicalReportCreateManyPatientInput = {
    id?: string
    reportName: string
    reportLink: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicalReportUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportName?: StringFieldUpdateOperationsInput | string
    reportLink?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalReportUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportName?: StringFieldUpdateOperationsInput | string
    reportLink?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalReportUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportName?: StringFieldUpdateOperationsInput | string
    reportLink?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type doctorSpecialtiesCreateManySpecialtiesInput = {
    doctorId: string
  }

  export type doctorSpecialtiesUpdateWithoutSpecialtiesInput = {
    doctor?: DoctorUpdateOneRequiredWithoutDoctorSpecialtiesNestedInput
  }

  export type doctorSpecialtiesUncheckedUpdateWithoutSpecialtiesInput = {
    doctorId?: StringFieldUpdateOperationsInput | string
  }

  export type doctorSpecialtiesUncheckedUpdateManyWithoutSpecialtiesInput = {
    doctorId?: StringFieldUpdateOperationsInput | string
  }

  export type DoctorSchedulesCreateManyScheduleInput = {
    doctorId: string
    isBooked?: boolean
    appointmentId?: string | null
  }

  export type DoctorSchedulesUpdateWithoutScheduleInput = {
    isBooked?: BoolFieldUpdateOperationsInput | boolean
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
    doctor?: DoctorUpdateOneRequiredWithoutDoctorSchedulesNestedInput
  }

  export type DoctorSchedulesUncheckedUpdateWithoutScheduleInput = {
    doctorId?: StringFieldUpdateOperationsInput | string
    isBooked?: BoolFieldUpdateOperationsInput | boolean
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DoctorSchedulesUncheckedUpdateManyWithoutScheduleInput = {
    doctorId?: StringFieldUpdateOperationsInput | string
    isBooked?: BoolFieldUpdateOperationsInput | boolean
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}