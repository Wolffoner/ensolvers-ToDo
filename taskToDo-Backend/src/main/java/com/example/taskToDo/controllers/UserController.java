package com.example.taskToDo.controllers;

import java.util.ArrayList;

import com.example.taskToDo.models.User;
import com.example.taskToDo.services.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
public class UserController {

  @Autowired
  UserService userService;

  @GetMapping
  public ArrayList<User> getUsers(){
    return userService.getUsers();
  }

  @PostMapping
  public User postUser(@RequestBody User user){
    return userService.saveUser(user);
  }
}
