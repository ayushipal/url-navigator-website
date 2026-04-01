const XLSX = require("xlsx");
const axios = require("axios");

exports.handleFileUpload = (req, res) => {
  try {
    const workbook = XLSX.readFile(req.file.path);
    const sheetName = workbook.SheetNames[0];
    const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

    const urls = data
      .map(row => Object.values(row)[0])
      .filter(val => typeof val === "string" && val.startsWith("http"));

    res.json({ urls });
  } catch (error) {
    res.status(500).json({ error: "Error processing file" });
  }
};

exports.handleGoogleSheet = async (req, res) => {
  try {
    const { url } = req.body;

    console.log("Incoming URL:", url);

    if (!url || !url.includes("/d/")) {
      return res.status(400).json({ error: "Invalid Google Sheet URL" });
    }

    const sheetId = url.split("/d/")[1]?.split("/")[0];

    const csvUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv`;

    console.log("CSV URL:", csvUrl);

    const response = await require("axios").get(csvUrl);

    const urls = response.data
      .split("\n")
      .map(row => row.trim())
      .filter(row => row.startsWith("http"));

    if (urls.length === 0) {
      return res.status(400).json({ error: "No valid URLs found in sheet" });
    }

    res.json({ urls });

  } catch (error) {
    console.error("FULL ERROR:", error.response?.data || error.message);
    res.status(500).json({ error: "Error fetching Google Sheet" });
  }
};