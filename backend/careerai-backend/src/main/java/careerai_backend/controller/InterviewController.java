package careerai_backend.controller;

import careerai_backend.repository.ResumeHistoryRepository;
import careerai_backend.service.InterviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import careerai_backend.repository.ResumeHistoryRepository;
import careerai_backend.entity.ResumeHistory;

@RestController
@RequestMapping("/api/interview")
@CrossOrigin(origins = "http://localhost:5173")
public class InterviewController {

    @Autowired
    private InterviewService interviewService;
    @Autowired
    private ResumeHistoryRepository resumeHistoryRepository;

@GetMapping("/generate")
public String generateQuestions(
        @RequestParam String role) {

    ResumeHistory latestResume =
            resumeHistoryRepository
                    .findTopByOrderByUploadDateDesc()
                    .orElse(null);

    if (latestResume == null) {

        return """
                No resume found.

                Please upload a resume first.
                """;
    }

    return interviewService
            .generateQuestionsFromResume(
                    role,
                    latestResume.getResumeText()
            );
}
}