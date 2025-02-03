import { useFormStatus } from "react-dom"
import { Button } from "../Button"
import { ArrowFoward } from "../icons/ArrowFoward"
import { Spinner } from "../Spinner"

export const SubmitButton = ({children}) => {
    const {pending} = useFormStatus()
    return (
      <Button aria-disabled={pending} type="submit">
        {pending ? (
          <Spinner />
        ) : (
          <>
            {children} <ArrowFoward />
          </>
        )}
      </Button>
    );
}