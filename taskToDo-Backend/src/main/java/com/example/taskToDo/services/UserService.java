package com.example.taskToDo.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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

  public Optional<User> getUserById(Long id){
    return userRepository.findById(id);
  }

}
