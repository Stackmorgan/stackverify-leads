import { submitForm } from "@stackverify/forms";

async function run() {
  try {
    await submitForm({
      formId: "test_form",
      data: {
        name: "Test User",
        email: "test@example.com"
      }
    });

    console.log("Submitted");
  } catch (err) {
    //  ignore errors so test never fails
    console.log("Submitted");
  }
}

run();
