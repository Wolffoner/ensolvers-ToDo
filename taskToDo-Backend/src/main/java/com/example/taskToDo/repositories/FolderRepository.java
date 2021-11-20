package com.example.taskToDo.repositories;

import com.example.taskToDo.models.Folder;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FolderRepository extends CrudRepository<Folder, Long> {
}
