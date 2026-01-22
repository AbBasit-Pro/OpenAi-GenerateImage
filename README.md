# OpenAi-GenerateImage
No UI, no extras — just clean backend-style code.

✔ uses DALL·E 3
✔ gets the image as a buffer
✔ saves it using fs.writeFileSync


📦 Install deps
npm install openai dotenv


dall-e-3 → latest image model

b64_json → safest way for file saving

Buffer.from(..., "base64") → converts image correctly

fs.writeFileSync() → synchronous file write (as you asked)
