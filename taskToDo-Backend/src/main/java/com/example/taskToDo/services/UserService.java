package com.example.taskToDo.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.example.taskToDo.models.Folder;
import com.example.taskToDo.models.User;
import com.example.taskToDo.repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
  
  @Autowired
  UserRepository userRepository;

  // get Users
  public List<User> getUsers(){
    return (ArrayList<User>) userRepository.findAll();
  }

  // save User
  public User saveUser(User user){
    return userRepository.save(user);
  }

  // get User by Id
  public User getUserById(Long id){
    Optional<User> user = userRepository.findById(id);
    if(user.isPresent()){
      return user.get();
    }
    return null;
  }

  public List<Folder> getFoldersOfUser(Long id){
    User user = getUserById(id);
    return user.getFolders();
  }

  public List<Task> getTasksOfUser(Long id){
    User user = getUserById(id);
    return user.getTasks();
  }

  // delete User by Id
  public User deleteUserById(Long id){
    Optional<User> userToDelete = userRepository.findById(id);
    if(userToDelete.isPresent()){
      userRepository.deleteById(id);
      return userToDelete.get();
    }
    return null;
  }
  
  // modify User by Id
  public User modifyUserById(Long id, User user){
    Optional<User> userToModify = userRepository.findById(id);
    if(userToModify.isPresent()){
      User userModify = userToModify.get();
      userModify.setName(user.getName());
      userModify.setPassword(user.getPassword());
      userRepository.save(userModify);
      return userModify;
    } else {
      return null;
    }
  }

}
