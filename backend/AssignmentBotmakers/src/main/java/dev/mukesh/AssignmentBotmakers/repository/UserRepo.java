package dev.mukesh.AssignmentBotmakers.repository;

import dev.mukesh.AssignmentBotmakers.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, Long> {

}
