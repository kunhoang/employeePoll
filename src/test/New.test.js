import React from 'react';
import {render} from '@testing-library/react';
import New from '../components/New';
import {Provider} from "react-redux";
import {store} from "../store";
import {BrowserRouter} from "react-router-dom";

describe("Home", () => {
    it("Load component New", () => {
        const component = render(
            <Provider store={store}>
                <BrowserRouter>
                    <New/>
                </BrowserRouter>
            </Provider>
        );
        expect(component).toBeDefined();
        expect(component).toMatchSnapshot();
    });
});