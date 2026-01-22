import OpenAI from "openai";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY,
});

async function generateImage() {
  try {
    const prompt = "A futuristic AI robot working on a laptop, digital art";

    const result = await openai.images.generate({
      model: "dall-e-3",
      prompt: prompt,
      size: "1024x1024",
    });

    // Base64 image → Buffer
    const imageBase64 = result.data[0].b64_json;
    const imageBuffer = Buffer.from(imageBase64, "base64");

    // Save image
    fs.writeFileSync("ai-image.png", imageBuffer);

    console.log("✅ Image saved as ai-image.png");
  } catch (error) {
    console.error("❌ Error:", error.message);
  }
}

generateImage();
