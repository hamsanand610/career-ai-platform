package careerai_backend.controller;

import careerai_backend.service.GeminiService;
import careerai_backend.service.ResumeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/resume")
public class ResumeController {

    @Autowired
    private ResumeService resumeService;

    @Autowired
    private GeminiService geminiService;

    @PostMapping("/upload")
    public ResponseEntity<String> uploadResume(
            @RequestParam("file") MultipartFile file) {

        try {

            String resumeText = resumeService.extractText(file);

            String atsReport = resumeService.generateATSReport(resumeText);

            String aiFeedback = geminiService.analyzeResume(resumeText);

            return ResponseEntity.ok(
            atsReport
                + "\n\n====================\n"
                + "GEMINI AI ANALYSIS\n"
                + "====================\n\n"
                + aiFeedback
);
        } catch (Exception e) {

            return ResponseEntity.badRequest()
                    .body("Error reading PDF");

        }
    }
}