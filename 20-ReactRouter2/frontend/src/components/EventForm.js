import {
  useNavigate,
  useNavigation,
  useActionData,
  Link
} from "react-router-dom";
import { Form } from "react-router-dom";
import { json, redirect } from "react-router-dom";

import classes from "./EventForm.module.css";

function EventForm({ method, event }) {
  const data = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";
  console.log(isSubmitting);
  function cancelHandler() {
    navigate("..");
  }

  return (
    <Form method={method} className={classes.form}>
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}
      <p>
        <label htmlFor="title">Title</label>
        <input
          defaultValue={event ? event.title : ""}
          id="title"
          type="text"
          name="title"
          required
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          defaultValue={event ? event.image : ""}
          id="image"
          type="url"
          name="image"
          required
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          defaultValue={event ? event.date : ""}
          id="date"
          type="date"
          name="date"
          required
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          defaultValue={event ? event.description : ""}
          id="description"
          name="description"
          rows="5"
          required
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button disabled={isSubmitting}>
          {isSubmitting ? "Submitting" : "Submit"}
        </button>
      </div>
    </Form>
  );
}

export default EventForm;

export const action = async ({ request, params }) => {
  const method = request.method;
  const data = await request.formData();
  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description")
  };
  let url = "http://localhost:8080/events";
  if (method === "PATCH") {
    const eventId = params.eventId;
    url = "http://localhost:8080/events/" + eventId;
  }
  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(eventData)
  });

  if (response.status === 422) {
    return response;
  }
  if (!response.ok) {
    throw json({ message: "coudlnt save event " }, { status: 500 });
  }

  return redirect("/events");
};
