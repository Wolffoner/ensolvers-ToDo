package com.example.taskToDo.models;

import java.time.LocalDate;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "task")
public class Task {

  // Attributes
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(unique = true, nullable = false)
  private Long id;

  @ManyToOne(cascade = { CascadeType.PERSIST, CascadeType.DETACH, CascadeType.MERGE, CascadeType.REFRESH })
  @JoinColumn(name = "folder_id")
  private Folder folder;

  @ManyToOne(cascade = { CascadeType.PERSIST, CascadeType.DETACH, CascadeType.MERGE, CascadeType.REFRESH })
  @JoinColumn(name = "user_id")
  private User user;

  @Column(nullable = false)
  private String title;
  private String description;
  @Column(nullable = false)
  private Boolean complete;
  @Column(nullable = false)
  private LocalDate dateCreation;
  private LocalDate dateFinished;

  // Constructor
  public Task() {
  }

  public Task(String title, String description, LocalDate dateCreation) {
    this.title = title;
    this.description = description;
    this.complete = false;
    this.dateCreation = dateCreation;
  }

  // Methods

  @JsonIgnore
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

  @JsonIgnore
  public Folder getFolder() {
    return this.folder;
  }

  public void setFolder(Folder folder) {
    this.folder = folder;
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

  public Boolean isComplete() {
    return this.complete;
  }

  public Boolean getComplete() {
    return this.complete;
  }

  public void setComplete(Boolean complete) {
    this.complete = complete;
  }

  public LocalDate getDateCreation() {
    return this.dateCreation;
  }

  public void setDateCreation(LocalDate dateCreation) {
    this.dateCreation = dateCreation;
  }

  public LocalDate getDateFinished() {
    return this.dateFinished;
  }

  public void setDateFinished(LocalDate dateFinished) {
    this.dateFinished = dateFinished;
  }

}
