package com.example.taskToDo.repositories;

import com.example.taskToDo.models.Folder;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FolderRepository extends CrudRepository<Folder, Long> {
  /*
  @Query(
  value = "SELECT title, description FROM folder u WHERE u.status = 1", 
  nativeQuery = true)
  Collection<Folder> findAllActiveUsersNative();*/
}
