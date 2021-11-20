package com.example.taskToDo.models;

import javax.persistence.*;

@Entity
@Table(name = "folder")
public class Folder {

  @Id
  @GeneratedValue (strategy = GenerationType.IDENTITY)
  private Long id;
  private String title;
  private String description;

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
