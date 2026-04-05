//  const Tesseract = require("tesseract.js");
// const path = require("path");

// async function doExtractAadhaar(req, res) {

//   try {

//     console.log("STEP 1: Request Received");

//     if (!req.files || !req.files.aadhaarFile) {
//       console.log("STEP 2: No File Uploaded");
//       return res.json({ status: false, msg: "No file uploaded" });
//     }

//     const file = req.files.aadhaarFile;
//     console.log("STEP 3: File Name =>", file.name);

//     const uploadPath = path.join(__dirname, "../uploads/" + file.name);

//     await file.mv(uploadPath);
//     console.log("STEP 4: File Saved At =>", uploadPath);

//     const result = await Tesseract.recognize(uploadPath, "eng");
//     console.log("STEP 5: OCR Done");

//     const text = result.data.text;
//     console.log("OCR TEXT:\n", text);

//     // -------- Aadhaar Number --------
//      const aadhaarRegex = /(\d[\d\s]{11,14}\d)/;;
//     const aadhaarMatch = text.match(aadhaarRegex);
// const aadhaarNo = aadhaarMatch ? aadhaarMatch[0].replace(/\s/g, "") : "";
// console.log("Aadhaar No:", aadhaarNo); // even if empty

//     console.log("STEP 6: Aadhaar Found =>", aadhaarNo);

//     // -------- Split Lines --------
//     let lines = text.split("\n")
//       .map(l => l.trim())
//       .filter(l => l.length > 2);
//       console.log("=== ALL LINES AFTER SPLIT ===");
// lines.forEach((l, i) => console.log(`Line ${i}: "${l}"`));

//     console.log("STEP 7: Raw Lines =>", lines);

//     // Remove Aadhaar line
//     lines = lines.filter(line => !aadhaarRegex.test(line));

//     // -------- Remove Symbols --------
//     lines = lines.map(line =>
//       line.replace(/[=™~_]/g, "").trim()
//     );

//     console.log("STEP 8: Symbol Cleaned =>", lines);

//     // -------- Remove Garbage --------
//     lines = lines.filter(line =>
//       !line.toLowerCase().includes("government") &&
//       !line.toLowerCase().includes("aadhaar")
//     );

//     console.log("STEP 9: Final Lines =>", lines);

//     // -------- NAME --------
//   //   let name = lines
//   // .filter(line => line.length > 3)           // reasonable length
//   // .map(line => line.replace(/[^A-Za-z\s]/g, "")) // remove non-letters
//   // .find(line => /^[A-Za-z\s]+$/.test(line)) || "";
//   // let name = lines
//   // .find(line => line.length > 3)
//   // ?.replace(/[^A-Za-z\s]/g, "") || "";
//   // extract name before removing government/aadhaar lines
  
// // let nameLine = lines.find(line => line.length > 3) || "";
// // let name = nameLine.replace(/[^A-Za-z\s]/g, "");
// // lines = lines
// //   .map(line => line.replace(/[=™~_]/g, "").trim())
// //   .filter(line => !line.toLowerCase().includes("government") &&
// //                   !line.toLowerCase().includes("aadhaar"));
// // lines = lines
// //   .map(line =>
// //     line
// //       .replace(/[=™~_]/g, "")
// //       .replace(/\s+/g, " ")
// //       .trim()
// //   )
// //   .filter(line => {
// //     const lower = line.toLowerCase();
// //     return !lower.includes("government") &&
// //            !lower.includes("aadhaar") &&
// //            !lower.includes("dob") &&
// //            !lower.includes("male") &&
// //            !lower.includes("female") &&
// //            !/\d{4}\s?\d{4}\s?\d{4}/.test(line) &&
// //            !/\d{2}\/\d{2}\/\d{4}/.test(line); // remove date
// //   });

// // let nameLine = lines.find(line => {
// //   const clean = line.replace(/[^A-Za-z.\-'\s]/g, "");
// //   return clean.length >= 5 && clean.split(" ").length >= 2;
// // });

// // let name = nameLine ? nameLine.replace(/[^A-Za-z.\-'\s]/g, "").trim() : "";
                  
// // lines = lines
// //   .map(line => line
// //        .replace(/[=™~_]/g, "")
// //        .replace(/\s+/g, " ")
// //        .trim())
// //   .filter(line => {
// //     const lower = line.toLowerCase();
// //     // remove known non-name lines
// //     return !lower.includes("government") &&
// //            !lower.includes("aadhaar") &&
// //            !lower.includes("dob") &&
// //            !lower.includes("male") &&
// //            !lower.includes("female") &&
// //            !/\d{4}\s?\d{4}\s?\d{4}/.test(line) &&
// //            line.length > 2; // remove very short lines
// //   });

// // Pick the line that looks like a name
// // let nameLine = lines.find(line => {
// //   // consider anything with letters + optional dots, hyphens, spaces
// //   return /[A-Za-z]/.test(line);
// // });

// // let name = nameLine || "";
// // Pick line that likely contains name
// // let nameLine = lines.find(line => {
// //   // clean symbols, keep letters, spaces, dots, hyphens, apostrophes
// //   const clean = line.replace(/[^\p{L}\s.\-']/gu, "");
// //   // consider it a name if at least 2 words with letters
// //   return clean.split(" ").filter(w => /\p{L}/u.test(w)).length >= 2;
// // });

// // let name = nameLine ? nameLine.replace(/[^\p{L}\s.\-']/gu, "").trim() : "";
// // ////////////////////////////////////////////////////////////
// // Clean lines and remove unwanted symbols / short lines / known non-name lines
// // console.log("Candidate lines before name pick:", lines);
// // lines = lines
// //   .map(line => line
// //        .replace(/[=™~_]/g, "")
// //        .replace(/\s+/g, " ")
// //        .trim())
// //   .filter(line => {
// //     const lower = line.toLowerCase();
// //     return !lower.includes("government") &&
// //            !lower.includes("aadhaar") &&
// //            !lower.includes("dob") &&
// //            !lower.includes("male") &&
// //            !lower.includes("female") &&
// //            !/\d{4}\s?\d{4}\s?\d{4}/.test(line) &&
// //            line.length > 2; // remove very short lines
// //   });

// // // Pick the line that likely contains the name
// // let nameLine = lines.find(line => {
// //   // Remove all non-letter symbols except space, dot, hyphen, apostrophe
// //   const clean = line.replace(/[^\p{L}\s.\-']/gu, "");
// //   // Consider it a name if it has at least 2 words with letters
// //   return clean.split(" ").filter(w => /\p{L}/u.test(w)).length >= 2;
// // });

// // // Final extracted name
// // let name = nameLine ? nameLine.replace(/[^\p{L}\s.\-']/gu, "").trim() : "";

// // console.log("STEP 10: Name =>", name);
// // Normalize spaces first
// // -------- Normalize lines and remove unwanted symbols --------


// // -------- Pick the first line likely to be the name --------
// // -------- Normalize lines --------

 

// // -------- Return JSON to front-end --------

// // Normalize lines
// /*
// lines = lines
//   .map(line => line.replace(/[=™~_]/g, "").replace(/\s+/g, " ").trim())
//   .filter(line => line.length > 2);

// // Remove obvious headers
// const skipKeywords = ["GOVERNMENT", "INDIA", "UNIQUE IDENTIFICATION", "AADHAAR"];
// lines = lines.filter(line => {
//   const upper = line.toUpperCase();
//   return !skipKeywords.some(k => upper.includes(k));
// });

// // Attempt 1: look for all-caps line with at least 2 words
// let nameLine = lines.find(line => {
//   const clean = line.replace(/[^A-Z\s.\-']/g, "").trim();
//   return /^[A-Z\s.\-']+$/.test(clean) && clean.split(" ").length >= 2;
// });

// // Attempt 2: fallback to line with letters only
// if (!nameLine) {
//   nameLine = lines.find(line => {
//     const clean = line.replace(/[^A-Za-z\s.\-']/g, "").trim();
//     return clean.length >= 2;
//   });
// }

// // Final cleaning
// let name = nameLine ? nameLine.replace(/[^A-Za-z\s.\-']/g, "").trim() : "";

// console.log("Extracted Name:", name);
// */

// // ///////////////////////////////////////////////////////////////////////

//     // // -------- ADDRESS --------
//     // let address = lines.find(line =>
//     //   /[0-9]/.test(line)
//     // ) || "";

//     // // -------- CITY --------
//     // let cityLine = lines.find(line =>
//     //   line.toLowerCase().includes("india")
//     // );

//     // let city = "";

//     // if (cityLine) {
//     //   city = cityLine.split(",")[0].trim();
//     // } else {
//     //   let index = lines.indexOf(address);
//     //   if (index !== -1 && lines[index + 1]) {
//     //     city = lines[index + 1].replace(",", "").trim();
//     //   }
//     // }

//     //  console.log("STEP 10: Name =>", name);
//     // console.log("STEP 11: Address =>", address);
//     //  console.log("STEP 12: City =>", city);
//     // -------- NAME EXTRACTION --------
// // Normalize lines
// // Helper to check if a line looks like a real name
// // Strategy 1: ALL-CAPS line with valid words
// // -------------------------------------Name------------------------------------------------
// // Skip these keywords
// const nameSkipWords = ["GOVERNMENT", "INDIA", "AADHAAR", "DOB", "BIRTH", "DATE", "MALE", "FEMALE", "ADDRESS", "UNIQUE"];

// // Check if a word looks like a real English name word
// function looksLikeNameWord(word) {
//   if (word.length < 3) return false;
//   // Must be either ALL CAPS like "RAHUL" or Title Case like "Rahul"
//   const isAllCaps = /^[A-Z]+$/.test(word);
//   const isTitleCase = /^[A-Z][a-z]+$/.test(word);
//   return isAllCaps || isTitleCase;
// }

// let nameLine = lines.find(line => {
//   // Skip lines with known keywords
//   const upper = line.toUpperCase();
//   if (nameSkipWords.some(k => upper.includes(k))) return false;

//   // Skip lines with numbers or dates
//   if (/\d/.test(line)) return false;

//   const clean = line.replace(/[^A-Za-z\s]/g, "").trim();
//   const words = clean.split(/\s+/).filter(w => w.length > 0);

//   // Must have 2-4 words (names are not longer than 4 words)
//   if (words.length < 2 || words.length > 4) return false;

//   // Every word must look like a real name word
//   return words.every(w => looksLikeNameWord(w));
// });

// let name = nameLine ? nameLine.replace(/[^A-Za-z\s]/g, "").trim() : "";
// console.log("Extracted Name =>", name);

// // ------------------Gender---------------------------------------------------
//       let gender = "";



// if (/\bfemale\b/i.test(text)) {
//     gender = "women";
// } else if (/\bmale\b/i.test(text)) {
//     gender = "men";
// }

// console.log("Extracted Gender:", gender);

//     return res.json({
//       status: true,
//        gender,
//       name,
//       aadhaarNo
//     });

//   } catch (err) {
//     console.log("STEP ERROR:", err);
//     return res.json({ status: false, msg: "OCR Failed" });
//   }
// }

// module.exports = { doExtractAadhaar };



// ------------------------------------------------------Gemini-----------------------------------------------------------------
// var path = require("path");
// var cloudinary = require("cloudinary"); 
// var { genAi } = require("../config/genai");
// cloudinary.config({
//     cloud_name:'dmrvmcaz9',
//     api_key:'429181772125419',
//     api_secret:'o6Fs5UzeOPVZDUK3VJDpHrnFIqQ'
// });

// async function doExtractAadhar(req, resp) {
//   try {
//     let file = req.files.aadhaarFile || req.files.aadhaarFileBack;
//     let fileName = file.name;
//     let uploadsFolderPath = path.join(__dirname, "..", "uploads", fileName);
//     file.mv(uploadsFolderPath);

//     await cloudinary.uploader.upload(uploadsFolderPath).then(async function(picUrlResult) {
//       let jsonData = await genAi(picUrlResult.url);
//       console.log("***************************")
//       console.log(jsonData);
//       console.log("*****************")
//       resp.status(200).json({ status: true,obj:jsonData });
//     });

//   } catch (err) {
//     resp.status(200).json({ status: false, msg: err.message });
//   }
// }

// module.exports = { doExtractAadhar };
var path = require("path");
var cloudinary = require("cloudinary").v2;
var { genAi } = require("../config/genai");

cloudinary.config({
    cloud_name: 'dmrvmcaz9',
    api_key: '429181772125419',
    api_secret: 'o6Fs5UzeOPVZDUK3VJDpHrnFIqQ'
});

async function doExtractAadharFront(req, resp) {
   console.log("Front hit ✅");      
    console.log("Files:", req.files)
    try {
        let file = req.files.aadhaarFile;  
        let fileName = file.name;
        // let uploadsFolderPath = path.join(__dirname, "..", "uploads", fileName);
        let uploadsFolderPath="/tmp/"+fileName;
       await file.mv(uploadsFolderPath);
         console.log("Uploading to cloudinary...");

        await cloudinary.uploader.upload(uploadsFolderPath).then(async function(picUrlResult) {
            let jsonData = await genAi(picUrlResult.url);
              console.log("GenAI done:", jsonData);
            console.log(jsonData);
            resp.status(200).json({ status: true, obj: jsonData });
        });

    } catch (err) {
      console.log("ERROR:", err.message);
        resp.status(200).json({ status: false, msg: err.message });
    }
}

async function doExtractAadharBack(req, resp) {
     console.log("Back hit ✅");      
    console.log("Files:", req.files)
    try {
        let file = req.files.aadhaarFileBack;  
        let fileName = file.name;
        // let uploadsFolderPath = path.join(__dirname, "..", "uploads", fileName);
        let uploadsFolderPath="/tmp/"+fileName;
       await file.mv(uploadsFolderPath);
        console.log("Uploading to cloudinary...");

        await cloudinary.uploader.upload(uploadsFolderPath).then(async function(picUrlResult) {
            let jsonData = await genAi(picUrlResult.url);
            console.log(jsonData);
            resp.status(200).json({ status: true, obj: jsonData });
        });

    } catch (err) {
        resp.status(200).json({ status: false, msg: err.message });
    }
}

module.exports = { doExtractAadharFront, doExtractAadharBack };