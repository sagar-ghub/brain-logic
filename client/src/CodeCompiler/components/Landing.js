import React, { useEffect, useState } from "react";
import CodeEditorWindow from "./CodeEditorWindow";
import axios from "axios";
import { classnames } from "../utils/general";
import { languageOptions } from "../constants/languageOptions";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { defineTheme } from "../lib/defineTheme";
import useKeyPress from "../hooks/useKeyPress";
import Footer from "./Footer";
import OutputWindow from "./OutputWindow";
import CustomInput from "./CustomInput";
import OutputDetails from "./OutputDetails";
import ThemeDropdown from "./ThemeDropdown";
import LanguagesDropdown from "./LanguagesDropdown";
import { Col, Row } from "react-bootstrap";
import apis from "../../api/api";
import { useParams } from "react-router-dom";

const javascriptDefault = `/**
* Problem: Binary Search: Search a sorted array for a target value.
*/

#include <stdio.h>

int main()
{
    printf("Hello World");

    return 0;
}

`;

const Landing = ({ user }) => {
  const [code, setCode] = useState(javascriptDefault);
  const [customInput, setCustomInput] = useState("");
  const [outputDetails, setOutputDetails] = useState(null);
  const [expectedOutput, setExpectedOutput] = useState("");
  const [processing, setProcessing] = useState(null);
  const [theme, setTheme] = useState("cobalt");
  const [language, setLanguage] = useState(languageOptions[0]);

  const enterPress = useKeyPress("Enter");
  const ctrlPress = useKeyPress("Control");

  const onSelectChange = (sl) => {
    console.log("selected Option...", sl);
    setLanguage(sl);
  };

  let { id } = useParams();
  // console.log(id);
  useEffect(() => {
    apis
      .getQuestionById(id)
      .then((res) => {
        console.log(res.data);
        let data = res.data?.data;
        setCustomInput(data[0]?.input);
        setExpectedOutput(data[0]?.output);
        // setData(res.data?.data);
        // setLoading(false);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          console.log(err.response.data);
        }
      });
  }, []);

  useEffect(() => {
    if (enterPress && ctrlPress) {
      console.log("enterPress", enterPress);
      console.log("ctrlPress", ctrlPress);
      handleCompile();
    }
  }, [ctrlPress, enterPress]);
  const onChange = (action, data) => {
    switch (action) {
      case "code": {
        setCode(data);
        break;
      }
      default: {
        console.warn("case not handled!", action, data);
      }
    }
  };
  const handleCompile = () => {
    setProcessing(true);
    const requestBody = {
      clientId: "f90d1c2bbb338783ac68d9b812da0f4d",
      clientSecret:
        "32fb1e09eb9f27dd8f6c4c9eacfc9eecd5743c68ebceb2bfe710942609fd1b0d",
      script: JSON.parse(code),
      stdin: customInput,
      language: language.value,
      versionIndex: language.id,
    };

    // const formData = {
    //   language_id: language.id,
    //   // encode source code in base64
    //   source_code: btoa(code),
    //   stdin: btoa(customInput),
    // };
    // const options = {
    //   method: "POST",
    //   url: process.env.REACT_APP_RAPID_API_URL,
    //   params: { base64_encoded: "true", fields: "*" },
    //   headers: {
    //     "content-type": "application/json",
    //     "Content-Type": "application/json",
    //     "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST,
    //     "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    //   },
    //   data: formData,
    // };
    const options = {
      method: "POST",
      url: "https://stage.jdoodle.com/execute",
      headers: {
        "Content-Type": "application/json",
      },
      data: requestBody,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log("res.data", response?.data);
        setOutputDetails(response?.data);
        setProcessing(false);

        if (response?.data?.output == expectedOutput) {
          toast.success("YOUR CODE IS APPROVED ");

          apis
            .updateScore({ userId: user.user_id, questionId: id })
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
        } else toast.error("TRY AGAIN");
        // const token = response.data.token;
        // checkStatus(token);
      })
      .catch((err) => {
        let error = err.response ? err.response.data : err;
        // get error status
        let status = err.response?.status;
        console.log("status", status);
        if (status === 429) {
          console.log("too many requests", status);

          showErrorToast(
            `Quota of 100 requests exceeded for the Day! Please read the blog on freeCodeCamp to learn how to setup your own RAPID API Judge0!`,
            10000
          );
        }
        setProcessing(false);
        console.log("catch block...", error);
      });
  };

  // const checkStatus = async (token) => {
  //   const options = {
  //     method: "GET",
  //     url: process.env.REACT_APP_RAPID_API_URL + "/" + token,
  //     params: { base64_encoded: "true", fields: "*" },
  //     headers: {
  //       "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST,
  //       "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
  //     },
  //   };
  //   try {
  //     let response = await axios.request(options);
  //     let statusId = response.data.status?.id;

  //     // Processed - we have a result
  //     if (statusId === 1 || statusId === 2) {
  //       // still processing
  //       setTimeout(() => {
  //         checkStatus(token);
  //       }, 2000);
  //       return;
  //     } else {
  //       setProcessing(false);
  //       setOutputDetails(response.data);
  //       showSuccessToast(`Compiled Successfully!`);
  //       console.log("response.data", response.data);
  //       return;
  //     }
  //   } catch (err) {
  //     console.log("err", err);
  //     setProcessing(false);
  //     showErrorToast();
  //   }
  // };

  function handleThemeChange(th) {
    const theme = th;
    console.log("theme...", theme);

    if (["light", "vs-dark"].includes(theme.value)) {
      setTheme(theme);
    } else {
      defineTheme(theme.value).then((_) => setTheme(theme));
    }
  }
  useEffect(() => {
    defineTheme("oceanic-next").then((_) =>
      setTheme({ value: "oceanic-next", label: "Oceanic Next" })
    );
  }, []);

  const showSuccessToast = (msg) => {
    toast.success(msg || `Compiled Successfully!`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const showErrorToast = (msg, timer) => {
    toast.error(msg || `Something went wrong! Please try again.`, {
      position: "top-right",
      autoClose: timer ? timer : 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <div className="h-4 w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"></div>
      <Row className="mt-2">
        <Col md={4}>
          <LanguagesDropdown onSelectChange={onSelectChange} />
        </Col>
        <Col md={4}>
          <ThemeDropdown handleThemeChange={handleThemeChange} theme={theme} />
        </Col>
      </Row>
      <div className="flex flex-row space-x-4 items-start px-4 py-4">
        <Row>
          <Col md={8}>
            <div className="flex flex-col w-full h-full justify-start items-end">
              <CodeEditorWindow
                code={code}
                onChange={onChange}
                language={language?.value}
                theme={theme.value}
              />
            </div>
          </Col>
          <Col md={4}>
            <div className="right-container flex flex-shrink-0 w-[30%] flex-col">
              {/* <OutputWindow outputDetails={outputDetails} /> */}
              <hr />
              <div className="flex flex-col items-end">
                <CustomInput
                  customInput={customInput}
                  setCustomInput={setCustomInput}
                />
                <button
                  onClick={handleCompile}
                  disabled={!code}
                  className={classnames(
                    "mt-4 border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-white flex-shrink-0",
                    !code ? "opacity-50" : ""
                  )}
                >
                  {processing ? "Processing..." : "Compile and Execute"}
                </button>
              </div>
              {outputDetails && <OutputDetails outputDetails={outputDetails} />}
              {expectedOutput && (
                <div>
                  <h4>Expected Output:</h4>
                  <textarea>{expectedOutput}</textarea>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  );
};
export default Landing;
