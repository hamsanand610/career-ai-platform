package careerai_backend.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service
public class GeminiService {

    @Value("${gemini.api.key}")
    private String apiKey;

    private final WebClient webClient = WebClient.builder().build();

    public String analyzeResume(String resumeText) {

        String prompt = """
                Analyze the following resume and provide:
                1. Strengths
                2. Weaknesses
                3. Missing Skills
                4. Improvement Suggestions

                Resume:
                """ + resumeText;

        String requestBody = """
                {
                  "contents": [{
                    "parts": [{
                      "text": "%s"
                    }]
                  }]
                }
                """.formatted(prompt.replace("\"", "\\\""));

        try {

            String response = webClient.post()
                    .uri("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=" + apiKey)
                    .header("Content-Type", "application/json")
                    .bodyValue(requestBody)
                    .retrieve()
                    .bodyToMono(String.class)
                    .block();

            return response;

        } catch (Exception e) {

    e.printStackTrace();

    return "Error calling Gemini API: " + e.getMessage();

}
    }
}