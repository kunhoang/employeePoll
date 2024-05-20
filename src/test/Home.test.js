import React from 'react';
import {render} from '@testing-library/react';
import Home from '../components/Home';
import {Provider} from "react-redux";
import {store} from "../store";
import {BrowserRouter} from "react-router-dom";
import {setAuthedUser} from "../actions/authedUser";

describe("Home", () => {
    it("Load component Home", () => {
        const component = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Home/>
                </BrowserRouter>
            </Provider>
        );
        expect(component).toBeDefined();
        expect(component).toMatchSnapshot();
    });

    it("Load component Home login", () => {
        store.dispatch(setAuthedUser({id: "sarahedo", password: "password123"}));
        const component = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Home/>
                </BrowserRouter>
            </Provider>
        );
        const heading = component.getByTestId("home");
        expect(heading).toBeInTheDocument();
    });
});