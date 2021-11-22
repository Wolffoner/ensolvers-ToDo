import React from 'react';
import { StyledBackground } from '../utils/bg/StyledBackground';
import {StyledBox, StyledBodyBox, StyledHeadBox} from '../utils/box/StyledBox';
import FolderList from '../utils/folderList/FolderList';
import { Button } from '../utils/button/Button';
import { Link } from 'react-router-dom';

const ViewFolders = () => {

  return (
    <>
      <StyledBackground>
        <StyledBox>
          <StyledHeadBox>
            <h1>Folders</h1>
          </StyledHeadBox>
          <StyledBodyBox>
            <FolderList/> 
          </StyledBodyBox>
          <StyledHeadBox>
            <Link to='/formFolder'><Button height="50px" width="200px" title="Create Folder"></Button></Link>
          </StyledHeadBox>
        </StyledBox>  
      </StyledBackground> 
    </>
  );
};

export default ViewFolders;
