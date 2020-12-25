import React, { useState, useEffect } from "react";

import styled from "styled-components";
import { Location } from "history";
import { useSelector, useDispatch } from "react-redux";
import { addSchool } from "./actions";
import Modal from "react-modal";
import { Formik, Field, Form } from "formik";
import AutoComplete from "./AutoComplete";
import { deleteSchool } from "./actions";

type StateType = {
  name: string;
};
type LocationProps = Location<StateType>;

interface Props {
  location: LocationProps;
  options: {};
}
const HomePage: React.FC<Props> = ({ location, options }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [schoolOptionsList, setSchoolsOptionsList] = React.useState([]);
  const [error, setError] = useState(null);
  const [schoolName, setSchoolName] = React.useState([]);
  useEffect(() => {
    // retrieving data from the university api
    fetch("http://universities.hipolabs.com/search?")
      .then((res) => res.json())
      .then(
        (result) => {
          // push the name of the university to an empty array
          let schoolNameArray = [] as any;
          for (let i = 0; i <= result.length - 1; i++) {
            schoolNameArray.push(result[i].name);
          }
          setSchoolsOptionsList(schoolNameArray);
          
        },

        (error) => {
          setError(error);
        }
      );
  }, []);

  const schools: any = useSelector((state) => state);

  const dispatch = useDispatch();
  
  const Main = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  `;
  const Title = styled.h4`
    margin-top: -320px;
    margin-left: 300px;

    position: absolute;
    align-self: "center";
  `;

  const FullBio = styled.div`
    position: absolute;
    width: 830px;
    background: lightgray;
    margin-left: 340px;
    margin-top: 200px;
    max-height: 310px;
  `;

  const SchoolList = styled.div`
    background: lightgray;

    margin-right: 850px;
    margin-top: 10%;
    width: 230px;
    position: "absolute";
    min-height: 370px;
    max-height: 370pv;
    padding-top: 10px;
    padding-bottom: 10px;

    .school-list {
      font-size: 17px;
      justify-content: "colunm";
      padding-top: 30;
      margin: 0 auto;
      width: 50%;
    }
  `;

  const Button = styled.button`
    background: lightgray;

    height: 40px;
    width: 170px;
    font-size: 15px;
    position: absolute;
    margin-top: -230px;
    margin-left: 300px;
    padding-bottom: 5;
  `;
  const ModalContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: "column";
  `;
  const SaveInfoButton = styled.button`
    background: lightgray;

    height: 30px;
    width: 70px;
    font-size: 15px;
    position: absolute;
    bottom: 10px;
    right: 10px;
  `;

  const DeleteButton = styled.button`
    background: red;

    height: 30px;
    width: 70px;
    font-size: 15px;
    position: relative;
    left: 75%;
  `;
  const SchoolName = styled.div`
    font-size: 30px;
    font-weight: "bold";
  `;

  const Degree = styled.div`
    font-size: 20px;
    margin-top: 7px;
  `;
  const StartYear = styled.div`
    font-size: 20px;
  `;
  const EndYear = styled.div`
    position: "absolute";
    margin-left: 15%;
    margin-top: -24px;
    font-size: 20px;
  `;
  const GPA = styled.div`
    font-size: 20px;
    margin-top: 7px;
  `;
  const Description = styled.div`
    margin-top: 7px;
  `;

  function addingSchool() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      top: "40%",
      left: "62%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: 370,
    },
  };
  function modalSaveInfo(school: any) {
    let schoolArray = school;
    setIsOpen(false);
    //set the selected school name value to the name key to be pass to global state 
    schoolArray.name = schoolName;
    
    dispatch(addSchool(school));
  }
  function schoolSelectorChange(name: any, typedSchool: any) {
    
    //push the selected university from the AutoComplete component to state
    setSchoolName(name);
   
  }

  function deleteSchoolFromList(school: any) {
    dispatch(deleteSchool(school));
  }

  return (
    <React.Fragment>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Education Modal"
      >
        <button onClick={closeModal}>X</button>
        <span style={{ marginLeft: 5 }}>Education Information</span>
        <ModalContent>
          <Formik
            enableReinitialize
            initialValues={{}}
            onSubmit={modalSaveInfo}
            render={(formikProps: any) => (
              <Form>
                <div style={{ flexDirection: "row" }}>
                  <div>
                    <label className="form-label">School Name</label>
                    <br />
                    <div className="App">
                      <AutoComplete
                        options={schoolOptionsList}
                        schoolSelectorChange={schoolSelectorChange}
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      position: "relative",
                      paddingLeft: 30,
                      marginLeft: "50%",
                      marginTop: -39,
                    }}
                  >
                    <label className="form-label">Degree</label>
                    <Field
                      name="degree"
                      type="text"
                      placeholder="Enter degree recieved"
                    />
                  </div>
                </div>

                <div style={{ marginTop: 25, position: "relative" }}>
                  <label className="form-label">Field of Study</label>
                  <br />
                  <Field
                    name="studyField"
                    type="text"
                    placeholder="Enter the field of study"
                  />
                </div>

                <div style={{ flexDirection: "row", marginTop: 25 }}>
                  <label>Year Started</label>
                  <br />
                  <Field
                    name="yearStarted"
                    type="number"
                    placeholder="Ex. 1999"
                  />{" "}
                  <div
                    style={{
                      position: "relative",
                      paddingLeft: 30,
                      marginLeft: "50%",
                      marginTop: -55,
                    }}
                  >
                    <label>Year Ended(Or Expected)</label>
                    <Field
                      name="yearEnded"
                      type="number"
                      placeholder="Ex. 1999"
                    />
                  </div>
                </div>
                <div style={{ marginTop: 25 }}>
                  <label className="form-label">GPA</label>
                  <br />
                  <Field
                    name="GPA"
                    step="0.01"
                    type="number"
                    placeholder="Enter your GPA"
                  />
                </div>
                <div style={{ marginTop: 25 }}>
                  <label className="form-label">Description</label>
                  <br />
                  <Field
                    name="desc"
                    rows="3"
                    maxLength="500"
                    component="textarea"
                    placeholder="Enter a description"
                  />
                </div>

                <SaveInfoButton type="submit">Save</SaveInfoButton>
              </Form>
            )}
          />
        </ModalContent>
      </Modal>

      <Main>
        <SchoolList>
          {" "}
          <div className="school-list">
            {" "}
            {schools.schoolReducer.schools.map((item: any, index: any) => (
              <p
                style={{
                  whiteSpace: "initial",
                  width: 1,
                  marginTop: 10,
                  fontSize: 15,
                  fontWeight: "bold",
                }}
              >
                {item.name}
              </p>
            ))}{" "}
          </div>
        </SchoolList>

        <Title>Welcome to {location.state.name}'s education page </Title>
        <Button onClick={addingSchool}>Add new education</Button>
        <br />

        <FullBio>
          <div
            style={{
              marginTop: 15,
              paddingBottom: 20,
              background: "lightgray",
              paddingLeft: "10%",
            }}
          >
            {schools.schoolReducer.schools.map((item: any, index: any) => (
              <div>
                <SchoolName>
                  Graduate of {item.studyField} at {item.name}
                </SchoolName>
                <Degree>{item.degree}</Degree>
                <div style={{ marginTop: 7 }}>
                  <StartYear>From-{item.yearStarted}</StartYear>
                  <EndYear>To-{item.yearEnded}</EndYear>
                </div>

                <GPA>GPA-{item.GPA}</GPA>
                <Description>{item.desc}</Description>
                <DeleteButton onClick={(item) => deleteSchoolFromList(item)}>
                  Delete
                </DeleteButton>
              </div>
            ))}
          </div>
        </FullBio>
      </Main>
    </React.Fragment>
  );
};

export default HomePage;
