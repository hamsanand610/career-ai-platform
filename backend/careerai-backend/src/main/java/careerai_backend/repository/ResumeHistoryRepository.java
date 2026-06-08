package careerai_backend.repository;

import careerai_backend.entity.ResumeHistory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ResumeHistoryRepository
        extends JpaRepository<ResumeHistory, Long> {

    Optional<ResumeHistory>
    findTopByOrderByUploadDateDesc();

    List<ResumeHistory>
    findAllByOrderByUploadDateDesc();
}