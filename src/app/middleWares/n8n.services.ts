// lib/n8n.service.ts
// e.g. https://your-n8n.com/webhook

type EventType =
    | "user-registered"
    | "order-confirmed"
    | "favourite-added"
    | "order-shipped"
    | "password-reset";

export async function triggerN8NWebhook(
    event: EventType,
    payload: Record<string, any>
) {
    // Read at call-time so dotenv has already populated the env
    const N8N_BASE_URL = "http://localhost:5678/webhook-test"
    console.log(N8N_BASE_URL);

    if (!N8N_BASE_URL) {
        console.error("n8n trigger error: N8N_WEBHOOK_BASE_URL is not set in .env");
        return;
    }

    try {
        const response = await fetch(`${N8N_BASE_URL}/${event}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            console.error(`n8n webhook failed for event: ${event}`);
        }
    } catch (error) {
        // Webhook fail হলেও main flow block হবে না
        console.error("n8n trigger error:", error);
    }
}