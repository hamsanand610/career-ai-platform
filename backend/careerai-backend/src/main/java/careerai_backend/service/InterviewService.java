package careerai_backend.service;

import org.springframework.stereotype.Service;

@Service
public class InterviewService {

    public String generateQuestions(
            String role,
            String resumeText) {

        StringBuilder questions =
                new StringBuilder();

        questions.append(
                role +
                " Interview Questions\n\n"
        );

        String lower =
                resumeText.toLowerCase();

        if (lower.contains("java")) {

            questions.append("""
                    Java

                    1. What is JVM?

                    2. Difference between JDK and JRE?

                    3. Explain OOP Principles.

                    4. What is a HashMap?

                    \n
                    """);
        }

        if (lower.contains("react")) {

            questions.append("""
                    React

                    1. What are React Hooks?

                    2. Explain Virtual DOM.

                    3. Difference between State and Props?

                    4. What is JSX?

                    \n
                    """);
        }

        if (lower.contains("mysql")) {

            questions.append("""
                    MySQL

                    1. Explain SQL Joins.

                    2. Difference between WHERE and HAVING?

                    3. What is Normalization?

                    \n
                    """);
        }

        if (lower.contains("git")) {

            questions.append("""
                    Git

                    1. What is Git Rebase?

                    2. Difference between Merge and Rebase?

                    \n
                    """);
        }

        if (lower.contains("spring")) {

            questions.append("""
                    Spring Boot

                    1. What is Dependency Injection?

                    2. Explain Spring Boot Architecture.

                    3. What are REST APIs?

                    \n
                    """);
        }

        if (questions.length() < 50) {

            questions.append("""
                    General Questions

                    1. Tell me about yourself.

                    2. Why should we hire you?

                    3. What are your strengths?

                    4. Where do you see yourself in 5 years?
                    """);
        }

        return questions.toString();
    }
}