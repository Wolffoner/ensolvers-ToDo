package com.example.taskToDo.controllers;

import java.util.List;

import com.example.taskToDo.models.Task;
import com.example.taskToDo.services.TaskService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/tasks")
public class TaskController {

  @Autowired
  TaskService taskService;

  @GetMapping
  public List<Task> getTasks(){
    return taskService.getTasks();
  }

  @GetMapping("/folder_id={folder_id}")
  public List<Task> getTasksByFolder(@PathVariable(name = "folder_id") Long folderId){
    return taskService.getTasksByFolder(folderId);
  }

  @GetMapping("/user_id={user_id}")
  public List<Task> getTasksByUser(@PathVariable(name = "user_id") Long userId){
    return taskService.getTasksByUserId(userId);
  }
  
  @GetMapping("/user_id={user_id}/folder_id={folder_id}")
  public List<Task> getTasksByUserAndFolder(@PathVariable(name = "user_id") Long userId, @PathVariable(name = "folder_id") Long folderId){
    return taskService.getTasksByFolderAndUserId(userId, folderId);
  }
  
  @GetMapping("/user_id={user_id}/folder_id={folder_id}/complete={complete}")
  public List<Task> getTasksByUserAndFolder(
    @PathVariable(name = "user_id") Long userId, 
    @PathVariable(name = "folder_id") Long folderId, 
    @PathVariable(name = "complete") Boolean complete){
    return taskService.getTasksCompletesByUserAndFolderId(userId, folderId, complete);
  }

  @GetMapping("/id={id}")
  public Task getTaskById(@PathVariable(name = "id") Long id){
    return taskService.getTaskById(id);
  }

  @PostMapping("/folder_id={folder_id}/user_id={user_id}")
  public Task postTask(@RequestBody Task task, @PathVariable(name = "folder_id") Long folderId, @PathVariable(name = "user_id") Long userId){
    return taskService.saveTask(task, userId, folderId);
  }

  @DeleteMapping("/id={id}")
  public Task deleteTask(@PathVariable(name = "id") Long id){
    return taskService.deleteTaskById(id);
  }

  @PutMapping("/id={id}")
  public Task modifyTask(@PathVariable(name="id") Long id, @RequestBody Task task){
    return taskService.modifyFolderById(id, task);
  }
}
