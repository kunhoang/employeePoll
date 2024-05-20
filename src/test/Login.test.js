import {fireEvent, render} from "@testing-library/react";
import {Provider} from "react-redux";
import {store} from "../store";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import Login from "../components/Login";
import {handleInitialData} from "../actions/shared";

describe("Login", () => {
    it("Check component", () => {
        const component = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Login/>
                </BrowserRouter>
            </Provider>
        );
        expect(component).toBeDefined();
        expect(component).toMatchSnapshot();
    });

    it('Check handle login', async () => {
        await store.dispatch(handleInitialData());

        const wrapper = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Login/>
                </BrowserRouter>
            </Provider>
        );

        const dataHeading = wrapper.getByTestId("login");
        const dataUsername = wrapper.getByTestId("username");
        const dataPassword = wrapper.getByTestId("password");
        const dataSubmitBtn = wrapper.getByTestId("submit");
        expect(dataHeading).toBeInTheDocument();
        expect(dataUsername).toBeInTheDocument();
        expect(dataPassword).toBeInTheDocument();
        expect(dataSubmitBtn).toBeInTheDocument();

        fireEvent.change(dataUsername, {target: {value: 'tylermcginnis'}});
        fireEvent.change(dataPassword, {target: {value: '123'}});
        expect(dataUsername.value).toBe("tylermcginnis");
        expect(dataPassword.value).toBe("123");
        fireEvent.click(dataSubmitBtn);
        expect(dataHeading).toBeInTheDocument();
        expect(dataUsername.value).toBe("");
        expect(dataPassword.value).toBe("");
    });
});