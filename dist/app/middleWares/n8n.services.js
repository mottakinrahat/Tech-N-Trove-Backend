"use strict";
// lib/n8n.service.ts
// e.g. https://your-n8n.com/webhook
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.triggerN8NWebhook = triggerN8NWebhook;
function triggerN8NWebhook(event, payload) {
    return __awaiter(this, void 0, void 0, function* () {
        // Read at call-time so dotenv has already populated the env
        const N8N_BASE_URL = "http://localhost:5678/webhook-test";
        console.log(N8N_BASE_URL);
        if (!N8N_BASE_URL) {
            console.error("n8n trigger error: N8N_WEBHOOK_BASE_URL is not set in .env");
            return;
        }
        try {
            const response = yield fetch(`${N8N_BASE_URL}/${event}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            if (!response.ok) {
                console.error(`n8n webhook failed for event: ${event}`);
            }
        }
        catch (error) {
            // Webhook fail হলেও main flow block হবে না
            console.error("n8n trigger error:", error);
        }
    });
}
