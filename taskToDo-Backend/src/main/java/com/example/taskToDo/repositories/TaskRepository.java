package com.example.taskToDo.repositories;

import java.util.List;

import com.example.taskToDo.models.Task;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepository extends CrudRepository<Task, Long> {

  @Query(
  value = "SELECT * FROM TaskToDoDB.task AS t  WHERE t.user_id = :userId", 
  nativeQuery = true)
  public List<Task> findTasksByUserId(@Param("userId") Long userId);

  @Query(
  value = "SELECT * FROM TaskToDoDB.task AS t WHERE t.folder_id = :folderId", 
  nativeQuery = true)
  public List<Task> findTaskByFolderId(@Param("folderId") Long folderId);
  
  @Query(
  value = "SELECT * FROM TaskToDoDB.task AS t  WHERE t.user_id = :userId AND t.folder_id = :folderId", 
  nativeQuery = true)
  public List<Task> findTaskByFolderAndUserId(@Param("userId") Long userId, @Param("folderId") Long folderId);
}
