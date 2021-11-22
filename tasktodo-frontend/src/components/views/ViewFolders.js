import React from 'react';
import { StyledBackground } from '../utils/bg/StyledBackground';
import {StyledBox, StyledBodyBox, StyledHeadBox} from '../utils/box/StyledBox';
import FolderList from '../utils/folderList/FolderList';
import { Button } from '../utils/button/Button';
//import {useNavigate} from 'react-router-dom';

const ViewFolders = () => {

  //const navigate = useNavigate();

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
            <Button height="50px" width="200px" title="Create Folder"></Button>
          </StyledHeadBox>
        </StyledBox>  
      </StyledBackground> 
    </>
  );
};

export default ViewFolders;
