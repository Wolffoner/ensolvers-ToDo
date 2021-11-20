package com.example.taskToDo.services;

import java.util.ArrayList;

import com.example.taskToDo.models.User;
import com.example.taskToDo.repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
  
  @Autowired
  UserRepository userRepository;

  // get Users
  public ArrayList<User> getUsers(){
    return (ArrayList<User>) userRepository.findAll();
  }

  // save User
  public User saveUser(User user){
    return userRepository.save(user);
  }
}
