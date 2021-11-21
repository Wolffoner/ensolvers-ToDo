package com.example.taskToDo.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.example.taskToDo.models.Folder;
import com.example.taskToDo.models.Task;
import com.example.taskToDo.models.User;
import com.example.taskToDo.repositories.FolderRepository;
import com.example.taskToDo.repositories.TaskRepository;
import com.example.taskToDo.repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class TaskService {
  
  @Autowired
  UserRepository userRepository;
  @Autowired
  FolderRepository folderRepository;
  @Autowired
  TaskRepository taskRepository;

  // get Tasks
  public List<Task> getTasks(){
    return (ArrayList<Task>) taskRepository.findAll();
  }

  // save Task
  public Task saveTask(Task task, Long userId, Long folderId){
    Optional<User> optUser = userRepository.findById(userId);
    Optional<Folder> optFolder = folderRepository.findById(folderId);
    if(optUser.isPresent() && optFolder.isPresent() && optFolder.get().getUser().getId().equals(userId)){
      User user = optUser.get();
      Folder folder = optFolder.get();
      task.setUser(user);
      task.setFolder(folder);
      user.addTask(task);
      folder.addTask(task);
      return taskRepository.save(task);
    }
    return null;
  }

  public List<Task> getTasksByFolder(Long folderId){
    return taskRepository.findTaskByFolderId(folderId);
  }

  public List<Task> getTasksByUserId(Long userId){
    return taskRepository.findTasksByUserId(userId);
  }

  public List<Task> getTasksByFolderAndUserId(Long userId, Long folderId){
    return taskRepository.findTaskByFolderAndUserId(userId, folderId);
  }

  // get Task by id
  public Task getTaskById(Long id){
    Optional<Task> optTask = taskRepository.findById(id);
    if(optTask.isPresent()){
      return optTask.get();
    }
    return null;
  }

  // delete Task by Id
  public Task deleteTaskById(Long id){
    Optional<Task> optTask = taskRepository.findById(id);
    if(optTask.isPresent()){
      taskRepository.deleteById(id);
      return optTask.get();
    }
    return null;
  }
  
  // modify Task by Id
  public Task modifyFolderById(Long id, Task task){
    Optional<Task> optTask = taskRepository.findById(id);
    if(optTask.isPresent()){
      Task taskModify = optTask.get();
      taskModify.setTitle(task.getTitle());
      taskModify.setDescription(task.getDescription());
      taskModify.setComplete(task.getComplete());
      taskModify.setDateCreation(task.getDateCreation());
      taskModify.setDateFinished(task.getDateFinished());
      taskRepository.save(taskModify);
      return taskModify;
    } else {
      return null;
    }
  }

}
