package com.example.taskToDo.models;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "user_u")
public class User {

  //Attributes
  @Id
  @GeneratedValue(strategy =  GenerationType.IDENTITY)
  private Long id;
  @Column(nullable = false)
  private String name;
  @Column(nullable = false)
  private String password;

  @OneToMany(mappedBy = "user",cascade = {CascadeType.PERSIST, CascadeType.DETACH, CascadeType.MERGE, CascadeType.REFRESH})
  private List<Folder> folders;
  @OneToMany(mappedBy = "user",cascade = {CascadeType.PERSIST, CascadeType.DETACH, CascadeType.MERGE, CascadeType.REFRESH})
  private List<Task> tasks;


  //Constructor
  public User(){
  }

  public User(String name, String password) {
    this.name = name;
    this.password = password;
  }

  
  
  //Methods

  public void addFolder(Folder folder){
    if(this.folders == null){ 
      this.folders = new ArrayList<>();
    }
    this.folders.add(folder);
  }
  
  public void addTask(Task task){
    if(this.tasks == null) {
      this.tasks = new ArrayList<>();
    }
    this.tasks.add(task);
  }

  public Long getId() {
    return this.id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getName() {
    return this.name;
  }

  public void setName(String name) {
    this.name = name;
  }

  @JsonIgnore
  public String getPassword() {
    return this.password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

}
