import { submitForm } from "@stackverify/forms";

await submitForm({
  formId: "test_form",
  data: {
    name: "Test User",
    email: "test@example.com"
  }
});

console.log("Submitted");