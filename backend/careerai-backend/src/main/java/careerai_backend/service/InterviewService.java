package careerai_backend.service;

import org.springframework.stereotype.Service;

@Service
public class InterviewService {

    public String generateQuestionsFromResume(
            String role,
            String resumeText) {

        StringBuilder questions = new StringBuilder();

        String selectedRole = role.toLowerCase();
        String lower = resumeText.toLowerCase();

        questions.append(
                "🎤 " + role + " Interview Questions\n\n"
        );

        /*
         * FRONTEND DEVELOPER
         */
        if (selectedRole.contains("frontend")) {

            questions.append("""
                    FRONTEND DEVELOPER ROUND

                    1. What are React Hooks?

                    2. Explain Virtual DOM.

                    3. Difference between State and Props?

                    4. What is JSX?

                    5. Explain React Lifecycle.

                    6. What is Redux?

                    7. Explain CSS Flexbox.

                    8. Difference between CSS Grid and Flexbox?

                    9. What is Event Bubbling?

                    10. Difference between Local Storage and Session Storage?

                    \n
                    """);

            if (!lower.contains("react")) {

                questions.append("""
                        PERSONALIZED IMPROVEMENT

                        1. Why is React widely used?

                        2. What are React Components?

                        \n
                        """);
            }
        }

        /*
         * JAVA DEVELOPER
         */
        else if (selectedRole.contains("java")) {

            questions.append("""
                    JAVA DEVELOPER ROUND

                    1. What is JVM?

                    2. Difference between JDK and JRE?

                    3. Explain OOP Principles.

                    4. What is a HashMap?

                    5. Explain Multithreading.

                    6. What is Exception Handling?

                    7. Difference between ArrayList and LinkedList?

                    8. Explain Streams API.

                    9. What is Garbage Collection?

                    10. What are Functional Interfaces?

                    \n
                    """);

            if (!lower.contains("spring")) {

                questions.append("""
                        PERSONALIZED IMPROVEMENT

                        1. What is Spring Boot?

                        2. Explain Dependency Injection.

                        \n
                        """);
            }
        }

        /*
         * BACKEND DEVELOPER
         */
        else if (selectedRole.contains("backend")) {

            questions.append("""
                    BACKEND DEVELOPER ROUND

                    1. What is Spring Boot?

                    2. Explain Dependency Injection.

                    3. What is JWT?

                    4. Explain REST APIs.

                    5. What is Hibernate?

                    6. Explain Microservices.

                    7. What is Docker?

                    8. What is Spring Security?

                    9. Difference between Authentication and Authorization?

                    10. Explain API Gateway.

                    \n
                    """);

            if (!lower.contains("docker")) {

                questions.append("""
                        PERSONALIZED IMPROVEMENT

                        1. What is Docker?

                        2. Explain Docker Containers.

                        \n
                        """);
            }
        }

        /*
         * FULL STACK DEVELOPER
         */
        else if (selectedRole.contains("full")) {

            questions.append("""
                    FULL STACK DEVELOPER ROUND

                    1. Explain MVC Architecture.

                    2. How does React communicate with Spring Boot?

                    3. Explain JWT Authentication.

                    4. Explain REST APIs.

                    5. What is Docker?

                    6. Explain MySQL Joins.

                    7. What is Redux?

                    8. Explain Spring Security.

                    9. Explain Deployment Flow.

                    10. Design a Full Stack Application.

                    \n
                    """);

            if (!lower.contains("aws")) {

                questions.append("""
                        PERSONALIZED IMPROVEMENT

                        1. What is AWS EC2?

                        2. Explain Cloud Computing.

                        \n
                        """);
            }
        }

        /*
         * HR ROUND
         */
        questions.append("""
                HR ROUND

                1. Tell me about yourself.

                2. Why should we hire you?

                3. What are your strengths?

                4. What are your weaknesses?

                5. Where do you see yourself in 5 years?

                6. Tell me about a challenge you faced.

                7. Describe your final year project.

                8. Why do you want this role?
                """);

        return questions.toString();
    }
}