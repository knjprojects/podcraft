import React from "react";
import { useSession, SignInButton, SignOutButton } from "@clerk/nextjs";
import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
type Props = {};

const TestingConvexWithAuth = (props: Props) => {
  const { isSignedIn } = useSession();

  const createThumbnail = useMutation(api.thumbnail.createThumnail);
  return (
    <div>
      {isSignedIn ? (
        <div>
          <SignOutButton />
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              const formData: any = new FormData(e.currentTarget);
              const title = formData.get("title");
              createThumbnail({ title: title }); //function called upon sumbitting title data
              form.reset();
            }}
          >
            <label>Title</label>
            <input name="input"></input>
            <button>Create</button>
          </form>
        </div>
      ) : (
        <SignInButton />
      )}
    </div>
  );
};

export default TestingConvexWithAuth;
