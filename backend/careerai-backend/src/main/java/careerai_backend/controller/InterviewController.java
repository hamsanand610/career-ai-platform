package careerai_backend.controller;

import careerai_backend.service.InterviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/interview")
@CrossOrigin(origins = "http://localhost:5173")
public class InterviewController {

    @Autowired
    private InterviewService interviewService;

    @GetMapping("/generate")
    public String generateQuestions(
            @RequestParam String role,
            @RequestParam String resumeText) {

        return interviewService
                .generateQuestions(role, resumeText);
    }
}