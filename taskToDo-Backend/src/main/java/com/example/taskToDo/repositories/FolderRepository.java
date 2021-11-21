package com.example.taskToDo.repositories;

import java.util.List;

import com.example.taskToDo.models.Folder;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface FolderRepository extends CrudRepository<Folder, Long> {
  
  @Query(
  value = "SELECT * FROM TaskToDoDB.folder AS f  WHERE f.user_id = :userId", 
  nativeQuery = true)
  public List<Folder> findFoldersById(@Param("userId") Long userId);
}
