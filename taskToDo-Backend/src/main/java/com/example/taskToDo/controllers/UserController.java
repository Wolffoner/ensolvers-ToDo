package com.example.taskToDo.controllers;

import java.util.List;
import java.util.Optional;

import com.example.taskToDo.models.User;
import com.example.taskToDo.services.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
public class UserController {

  @Autowired
  UserService userService;

  @GetMapping
  public List<User> getUsers(){
    return userService.getUsers();
  }

  @GetMapping("/")
  public Optional<User> getUserById(@RequestParam(name = "id") Long id){
    return userService.getUserById(id);
  }

  @PostMapping
  public User postUser(@RequestBody User user){
    return userService.saveUser(user);
  }

  @DeleteMapping
  public Optional<User> deleteUser(@RequestParam(name = "id") Long id){
    return userService.deleteUserById(id);
  }

  @PutMapping("/")
  public Optional<User> modifyUser(@RequestParam(name="id") Long id, @RequestBody User user){
    return userService.modifyUserById(id, user);
  }
}
