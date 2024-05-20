import React from 'react';
import {render} from '@testing-library/react';
import {Provider} from "react-redux";
import {store} from "../store";
import {BrowserRouter} from "react-router-dom";
import LeaderBoard from '../components/LeaderBoard';

describe("Home", () => {
    it("Load component New", () => {
        const component = render(
            <Provider store={store}>
                <BrowserRouter>
                    <LeaderBoard/>
                </BrowserRouter>
            </Provider>
        );
        expect(component).toBeDefined();
        expect(component).toMatchSnapshot();
    });
});