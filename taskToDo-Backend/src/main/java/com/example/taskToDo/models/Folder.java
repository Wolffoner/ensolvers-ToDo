package com.example.taskToDo.models;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

@Entity
@Table(name = "folder")
public class Folder {

  //Attributes
  @Id
  @GeneratedValue (strategy = GenerationType.IDENTITY)
  private Long id;
  private String title;
  private String description;

  @OneToMany(mappedBy = "folder",cascade = {CascadeType.PERSIST, CascadeType.DETACH, CascadeType.MERGE, CascadeType.REFRESH})
  private List<Task> tasks;

  @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.DETACH, CascadeType.MERGE, CascadeType.REFRESH})
  @JoinColumn(name = "user_id")
  private User user;

  //Constructor
  public Folder(Long id, String title, String description, User user) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.user = user;
  }

  //Methods
  public void addTask(Task task){
    if(tasks == null) this.tasks = new ArrayList<>();
    tasks.add(task);
    task.setFolder(this);
  }

  public User getUser() {
    return this.user;
  }

  public void setUser(User user) {
    this.user = user;
  }

  public Long getId() {
    return this.id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getTitle() {
    return this.title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getDescription() {
    return this.description;
  }

  public void setDescription(String description) {
    this.description = description;
  }
}
