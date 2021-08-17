import { render, screen } from "@testing-library/react";
import Message from "../Message";

describe('Message', () => {
    it('matches snapshot online', () => {
        const component = render(<Message author="Pavel" text="It is my chat" />)

        expect(component).toMatchSnapshot()
    })
    it('should contain message text "It is my chat"', () => {
        render(<Message author="Pavel" text="It is my chat" />)

        const wrapper = screen.getByText(/It is my chat/i)

        expect(wrapper).toBeInTheDocument()
    })

})