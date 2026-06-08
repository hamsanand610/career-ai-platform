package careerai_backend.service;

import org.apache.pdfbox.Loader;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
public class ResumeService {

    public String extractText(MultipartFile file) throws IOException {

        PDDocument document = Loader.loadPDF(file.getBytes());

        PDFTextStripper pdfStripper = new PDFTextStripper();

        String text = pdfStripper.getText(document);

        document.close();

        return text;
    }

    public int calculateATSScore(String resumeText) {

    String[] keywords = {
            "java",
            "spring",
            "spring boot",
            "react",
            "mysql",
            "git",
            "github",
            "rest api",
            "html",
            "css",
            "javascript",
            "jwt"
    };

    int matches = 0;

    String lowerText = resumeText.toLowerCase();

    for (String keyword : keywords) {

        if (lowerText.contains(keyword)) {
            matches++;
        }
    }

    return (matches * 100) / keywords.length;
}

    public String generateATSReport(String resumeText) {

    String[] keywords = {
            "java",
            "spring boot",
            "react",
            "mysql",
            "git",
            "github",
            "rest api",
            "html",
            "css",
            "javascript",
            "jwt",
            "docker",
            "aws",
            "kubernetes"
    };

    StringBuilder foundSkills = new StringBuilder();
    StringBuilder missingSkills = new StringBuilder();

    String lowerText = resumeText.toLowerCase();

    int matches = 0;

    for (String keyword : keywords) {

        if (lowerText.contains(keyword)) {

            foundSkills.append("✅ ").append(keyword).append("\n");
            matches++;

        } else {

            missingSkills.append("❌ ").append(keyword).append("\n");
        }
    }

    int score = (matches * 100) / keywords.length;

    return "ATS Score: " + score + "/100\n\n"
            + "Found Skills:\n"
            + foundSkills
            + "\nMissing Skills:\n"
            + missingSkills
            + "\nRecommendation:\n"
            + "Add more missing keywords to improve ATS performance.";
}
public String generateRoadmap(String resumeText) {

    StringBuilder roadmap = new StringBuilder();

    roadmap.append(
        "🚀 Career Improvement Roadmap\n\n"
    );

    String lower = resumeText.toLowerCase();

    if (!lower.contains("spring boot")) {
        roadmap.append(
            "✓ Learn Spring Boot\n"
        );
    }

    if (!lower.contains("rest api")) {
        roadmap.append(
            "✓ Build REST APIs\n"
        );
    }

    if (!lower.contains("jwt")) {
        roadmap.append(
            "✓ Learn JWT Authentication\n"
        );
    }

    if (!lower.contains("docker")) {
        roadmap.append(
            "✓ Learn Docker\n"
        );
    }

    if (!lower.contains("aws")) {
        roadmap.append(
            "✓ Learn AWS Cloud\n"
        );
    }

    if (!lower.contains("kubernetes")) {
        roadmap.append(
            "✓ Learn Kubernetes\n"
        );
    }

    return roadmap.toString();
}
}