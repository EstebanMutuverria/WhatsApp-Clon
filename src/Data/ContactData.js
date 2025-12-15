const contact_data = [
    {
        contact_id : 1,
        contact_name : "Contacto 1",
        contact_avatar: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAHBhISBw4WEBITExAQFQ4RGBsPEBUOGBEXFhYSEx8YHSggGBomGxUXITEhJSkrLi4uGR8zODMtQygtMS4BCgoKDg0NDg0PDysZFRkrKystKys3KysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAYBAgUDB//EADQQAQABAgIHBgQGAwEAAAAAAAABAgMEEQUUITFBUZESIjJTYdEVcYGhEyNScsHhorHwQv/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFhEBAQEAAAAAAAAAAAAAAAAAABEB/9oADAMBAAIRAxEAPwD60AqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI+LxdGFp/MnbwpjfIJDEzlvV/EaTuXp7s9iOVO/rvQ6p7U97b6ztIVbInPcyqUbJ2JVjSFyzPi7Ucqtv8AZCrGImCx9OKjKO7V+mf45pYAAAAAAAAAAAAAAAAAAAAAAI+NxMYWxNU7Z3RHOVcu3Ju3JquTnM8UvS9/8XFzEbqe79ePt9EFUAAAAZpqmmrOmcpjbExvzWHRuM1qz3vFG/19VdScBf1fFUzw3T+2f+z+gLKAigAAAAAAAAAAAAAAAAAAAKncq7dyZnjMz1lq2rp7FcxPCZj7tVQAAAAABasPV27FMzxppn7PR54ensYemJ4U0x9noigAAAAAAAAAAAAAAAAAAMZ7QV/S9j8HGTMbqu9Hz4/f/aEs2OwsYqxlumNsT6+yt3KJt1zFcZTGyYVNagAAzG/aDCRgbGsYqmnhnnP7Y3vHLOcojb6b8/o7+jMHqtrOvxVb/SOQJoCKAAAAAAAAAAAAAAAAAAxV4WnHY9GMgaTshHxeEpxVPe2TH/qN8ek80xjIFcv4G5Znw9qP1U7UVbcmKrdNfjpifnGZSKnmkWMHcvz3KZy5zshY6bVNHhpiPlEQ3KRz8FgKcNlM96rd2uXyTI3t8jIGkeLa3pq7W5liIy3AyAAAAAAAAAAAAAAAACDpHSEYaOzb21/aI5z7Ak38RRh6c71UR/uflDnXdMxE/k0Z+tWz7Q5Vy5NyvO5OczxlosSujOmLnCKek+7Hxi7yp6T7ueA6Hxi7yp6T7nxi7yp6T7ueA6Hxi7yp6T7nxi7yp6T7ueA6Hxi7yp6T7s/GLvKnpPu5wDr2tNbfzaPrTP8AE+7oYfFUYmPyqs5/TOyrorDNMzTOdM5THGNkkKto5mjdJfizFGI8XCrn6T6umigAAAAAAAAAAAAAPDG4jVcPNXHdEc6laqqmuqZqnOZ2zPq6GnL3axEUxupj/Kf6yc1cTQAAAAAAAAAAAGVh0ZitZw/f8VOyfXlKupuibv4WNjlV3Z+u775AsICKAAAAAAAAAAAArWkZ7WOr/dMdNiMtFWEt11TNVumZnbM5cWupWvLp6LUisizala8unoala8unoUisizala8unoala8unoUisizala8unoala8unoUisizala8unoala8unoUisizala8unoala8unoUisizala8unoala8unoUist7VXZu0zHCYn7rHqVry6ehqVry6ehSJEgIoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9k=",
        contact_unseen_messages : 2,
        contact_last_message_content : "como estás?",
        contact_last_message_state : "", // NOT-SENDED | NOT-RECEIVED | RECEIVED | SEEN
        contact_last_message_date: new Date().toLocaleDateString(),
        messages: [
            {
                message_id : 1,
                message_content : "Buen día!",
                message_state : "RECEIVED", // NOT-SENDED | NOT-RECEIVED | RECEIVED | SEEN
                message_date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                send_by_me: false
            },
            {
                message_id : 2,
                message_content : "Como estás?",
                message_state : "RECEIVED", // NOT-SENDED | NOT-RECEIVED | RECEIVED | SEEN
                message_date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                send_by_me: false
            },
        ]
    },
        {
        contact_id : 2,
        contact_name : "Contacto 2",
        contact_avatar: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAHBhISBw4WEBITExAQFQ4RGBsPEBUOGBEXFhYSEx8YHSggGBomGxUXITEhJSkrLi4uGR8zODMtQygtMS4BCgoKDg0NDg0PDysZFRkrKystKys3KysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAYBAgUDB//EADQQAQABAgIHBgQGAwEAAAAAAAABAgMEEQUUITFBUZESIjJTYdEVcYGhEyNScsHhorHwQv/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFhEBAQEAAAAAAAAAAAAAAAAAABEB/9oADAMBAAIRAxEAPwD60AqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI+LxdGFp/MnbwpjfIJDEzlvV/EaTuXp7s9iOVO/rvQ6p7U97b6ztIVbInPcyqUbJ2JVjSFyzPi7Ucqtv8AZCrGImCx9OKjKO7V+mf45pYAAAAAAAAAAAAAAAAAAAAAAI+NxMYWxNU7Z3RHOVcu3Ju3JquTnM8UvS9/8XFzEbqe79ePt9EFUAAAAZpqmmrOmcpjbExvzWHRuM1qz3vFG/19VdScBf1fFUzw3T+2f+z+gLKAigAAAAAAAAAAAAAAAAAAAKncq7dyZnjMz1lq2rp7FcxPCZj7tVQAAAAABasPV27FMzxppn7PR54ensYemJ4U0x9noigAAAAAAAAAAAAAAAAAAMZ7QV/S9j8HGTMbqu9Hz4/f/aEs2OwsYqxlumNsT6+yt3KJt1zFcZTGyYVNagAAzG/aDCRgbGsYqmnhnnP7Y3vHLOcojb6b8/o7+jMHqtrOvxVb/SOQJoCKAAAAAAAAAAAAAAAAAAxV4WnHY9GMgaTshHxeEpxVPe2TH/qN8ek80xjIFcv4G5Znw9qP1U7UVbcmKrdNfjpifnGZSKnmkWMHcvz3KZy5zshY6bVNHhpiPlEQ3KRz8FgKcNlM96rd2uXyTI3t8jIGkeLa3pq7W5liIy3AyAAAAAAAAAAAAAAAACDpHSEYaOzb21/aI5z7Ak38RRh6c71UR/uflDnXdMxE/k0Z+tWz7Q5Vy5NyvO5OczxlosSujOmLnCKek+7Hxi7yp6T7ueA6Hxi7yp6T7nxi7yp6T7ueA6Hxi7yp6T7nxi7yp6T7ueA6Hxi7yp6T7s/GLvKnpPu5wDr2tNbfzaPrTP8AE+7oYfFUYmPyqs5/TOyrorDNMzTOdM5THGNkkKto5mjdJfizFGI8XCrn6T6umigAAAAAAAAAAAAAPDG4jVcPNXHdEc6laqqmuqZqnOZ2zPq6GnL3axEUxupj/Kf6yc1cTQAAAAAAAAAAAGVh0ZitZw/f8VOyfXlKupuibv4WNjlV3Z+u775AsICKAAAAAAAAAAAArWkZ7WOr/dMdNiMtFWEt11TNVumZnbM5cWupWvLp6LUisizala8unoala8unoUisizala8unoala8unoUisizala8unoala8unoUisizala8unoala8unoUisizala8unoala8unoUisizala8unoala8unoUist7VXZu0zHCYn7rHqVry6ehqVry6ehSJEgIoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9k=",
        contact_unseen_messages : 0,
        contact_last_message_content : "Buen día!",
        contact_last_message_state : "SEEN", // NOT-SENDED | NOT-RECEIVED | RECEIVED | SEEN
        contact_last_message_date: new Date().toLocaleDateString(),
        messages: [
            {
                message_id : 1,
                message_content : "Hola, buen día!",
                message_state : "RECEIVED", // NOT-SENDED | NOT-RECEIVED | RECEIVED | SEEN
                message_date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                send_by_me: false
            },
            {
                message_id : 2,
                message_content : "Buen día!",
                message_state : "SEEN", // NOT-SENDED | NOT-RECEIVED | RECEIVED | SEEN
                message_date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                send_by_me: true
            },
        ]
    },
    {
        contact_id : 3,
        contact_name : "Contacto 3",
        contact_avatar: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAHBhISBw4WEBITExAQFQ4RGBsPEBUOGBEXFhYSEx8YHSggGBomGxUXITEhJSkrLi4uGR8zODMtQygtMS4BCgoKDg0NDg0PDysZFRkrKystKys3KysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAYBAgUDB//EADQQAQABAgIHBgQGAwEAAAAAAAABAgMEEQUUITFBUZESIjJTYdEVcYGhEyNScsHhorHwQv/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFhEBAQEAAAAAAAAAAAAAAAAAABEB/9oADAMBAAIRAxEAPwD60AqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI+LxdGFp/MnbwpjfIJDEzlvV/EaTuXp7s9iOVO/rvQ6p7U97b6ztIVbInPcyqUbJ2JVjSFyzPi7Ucqtv8AZCrGImCx9OKjKO7V+mf45pYAAAAAAAAAAAAAAAAAAAAAAI+NxMYWxNU7Z3RHOVcu3Ju3JquTnM8UvS9/8XFzEbqe79ePt9EFUAAAAZpqmmrOmcpjbExvzWHRuM1qz3vFG/19VdScBf1fFUzw3T+2f+z+gLKAigAAAAAAAAAAAAAAAAAAAKncq7dyZnjMz1lq2rp7FcxPCZj7tVQAAAAABasPV27FMzxppn7PR54ensYemJ4U0x9noigAAAAAAAAAAAAAAAAAAMZ7QV/S9j8HGTMbqu9Hz4/f/aEs2OwsYqxlumNsT6+yt3KJt1zFcZTGyYVNagAAzG/aDCRgbGsYqmnhnnP7Y3vHLOcojb6b8/o7+jMHqtrOvxVb/SOQJoCKAAAAAAAAAAAAAAAAAAxV4WnHY9GMgaTshHxeEpxVPe2TH/qN8ek80xjIFcv4G5Znw9qP1U7UVbcmKrdNfjpifnGZSKnmkWMHcvz3KZy5zshY6bVNHhpiPlEQ3KRz8FgKcNlM96rd2uXyTI3t8jIGkeLa3pq7W5liIy3AyAAAAAAAAAAAAAAAACDpHSEYaOzb21/aI5z7Ak38RRh6c71UR/uflDnXdMxE/k0Z+tWz7Q5Vy5NyvO5OczxlosSujOmLnCKek+7Hxi7yp6T7ueA6Hxi7yp6T7nxi7yp6T7ueA6Hxi7yp6T7nxi7yp6T7ueA6Hxi7yp6T7s/GLvKnpPu5wDr2tNbfzaPrTP8AE+7oYfFUYmPyqs5/TOyrorDNMzTOdM5THGNkkKto5mjdJfizFGI8XCrn6T6umigAAAAAAAAAAAAAPDG4jVcPNXHdEc6laqqmuqZqnOZ2zPq6GnL3axEUxupj/Kf6yc1cTQAAAAAAAAAAAGVh0ZitZw/f8VOyfXlKupuibv4WNjlV3Z+u775AsICKAAAAAAAAAAAArWkZ7WOr/dMdNiMtFWEt11TNVumZnbM5cWupWvLp6LUisizala8unoala8unoUisizala8unoala8unoUisizala8unoala8unoUisizala8unoala8unoUisizala8unoala8unoUisizala8unoala8unoUist7VXZu0zHCYn7rHqVry6ehqVry6ehSJEgIoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9k=",
        contact_unseen_messages : 1,
        contact_last_message_content : "Mensaje de prueba",
        contact_last_message_state : "", // NOT-SENDED | NOT-RECEIVED | RECEIVED | SEEN
        contact_last_message_date: new Date().toLocaleDateString(),
        messages: [
            {
                message_id : 1,
                message_content : "Mensaje de prueba",
                message_state : "", // NOT-SENDED | NOT-RECEIVED | RECEIVED | SEEN
                message_date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                send_by_me: false
            },
        ]
    },
    {
        contact_id : 4,
        contact_name : "Contacto 4",
        contact_avatar: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAHBhISBw4WEBITExAQFQ4RGBsPEBUOGBEXFhYSEx8YHSggGBomGxUXITEhJSkrLi4uGR8zODMtQygtMS4BCgoKDg0NDg0PDysZFRkrKystKys3KysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAYBAgUDB//EADQQAQABAgIHBgQGAwEAAAAAAAABAgMEEQUUITFBUZESIjJTYdEVcYGhEyNScsHhorHwQv/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFhEBAQEAAAAAAAAAAAAAAAAAABEB/9oADAMBAAIRAxEAPwD60AqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI+LxdGFp/MnbwpjfIJDEzlvV/EaTuXp7s9iOVO/rvQ6p7U97b6ztIVbInPcyqUbJ2JVjSFyzPi7Ucqtv8AZCrGImCx9OKjKO7V+mf45pYAAAAAAAAAAAAAAAAAAAAAAI+NxMYWxNU7Z3RHOVcu3Ju3JquTnM8UvS9/8XFzEbqe79ePt9EFUAAAAZpqmmrOmcpjbExvzWHRuM1qz3vFG/19VdScBf1fFUzw3T+2f+z+gLKAigAAAAAAAAAAAAAAAAAAAKncq7dyZnjMz1lq2rp7FcxPCZj7tVQAAAAABasPV27FMzxppn7PR54ensYemJ4U0x9noigAAAAAAAAAAAAAAAAAAMZ7QV/S9j8HGTMbqu9Hz4/f/aEs2OwsYqxlumNsT6+yt3KJt1zFcZTGyYVNagAAzG/aDCRgbGsYqmnhnnP7Y3vHLOcojb6b8/o7+jMHqtrOvxVb/SOQJoCKAAAAAAAAAAAAAAAAAAxV4WnHY9GMgaTshHxeEpxVPe2TH/qN8ek80xjIFcv4G5Znw9qP1U7UVbcmKrdNfjpifnGZSKnmkWMHcvz3KZy5zshY6bVNHhpiPlEQ3KRz8FgKcNlM96rd2uXyTI3t8jIGkeLa3pq7W5liIy3AyAAAAAAAAAAAAAAAACDpHSEYaOzb21/aI5z7Ak38RRh6c71UR/uflDnXdMxE/k0Z+tWz7Q5Vy5NyvO5OczxlosSujOmLnCKek+7Hxi7yp6T7ueA6Hxi7yp6T7nxi7yp6T7ueA6Hxi7yp6T7nxi7yp6T7ueA6Hxi7yp6T7s/GLvKnpPu5wDr2tNbfzaPrTP8AE+7oYfFUYmPyqs5/TOyrorDNMzTOdM5THGNkkKto5mjdJfizFGI8XCrn6T6umigAAAAAAAAAAAAAPDG4jVcPNXHdEc6laqqmuqZqnOZ2zPq6GnL3axEUxupj/Kf6yc1cTQAAAAAAAAAAAGVh0ZitZw/f8VOyfXlKupuibv4WNjlV3Z+u775AsICKAAAAAAAAAAAArWkZ7WOr/dMdNiMtFWEt11TNVumZnbM5cWupWvLp6LUisizala8unoala8unoUisizala8unoala8unoUisizala8unoala8unoUisizala8unoala8unoUisizala8unoala8unoUisizala8unoala8unoUist7VXZu0zHCYn7rHqVry6ehqVry6ehSJEgIoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9k=",
        contact_unseen_messages : 0,
        contact_last_message_content : "Mensaje de prueba 2",
        contact_last_message_state : "NOT-RECEIVED", // NOT-SENDED | NOT-RECEIVED | RECEIVED | SEEN
        contact_last_message_date: new Date().toLocaleDateString(),
        messages: [
            {
                message_id : 1,
                message_content : "Mensaje de prueba",
                message_state : "NOT-RECEIVED", // NOT-SENDED | NOT-RECEIVED | RECEIVED | SEEN
                message_date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                send_by_me: true
            },
            {
                message_id : 2,
                message_content : "Mensaje de prueba 2",
                message_state : "NOT-RECEIVED", // NOT-SENDED | NOT-RECEIVED | RECEIVED | SEEN
                message_date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                send_by_me: true
            },
        ]
    },
    {
        contact_id : 5,
        contact_name : "Contacto 5",
        contact_avatar: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAHBhISBw4WEBITExAQFQ4RGBsPEBUOGBEXFhYSEx8YHSggGBomGxUXITEhJSkrLi4uGR8zODMtQygtMS4BCgoKDg0NDg0PDysZFRkrKystKys3KysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAYBAgUDB//EADQQAQABAgIHBgQGAwEAAAAAAAABAgMEEQUUITFBUZESIjJTYdEVcYGhEyNScsHhorHwQv/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFhEBAQEAAAAAAAAAAAAAAAAAABEB/9oADAMBAAIRAxEAPwD60AqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI+LxdGFp/MnbwpjfIJDEzlvV/EaTuXp7s9iOVO/rvQ6p7U97b6ztIVbInPcyqUbJ2JVjSFyzPi7Ucqtv8AZCrGImCx9OKjKO7V+mf45pYAAAAAAAAAAAAAAAAAAAAAAI+NxMYWxNU7Z3RHOVcu3Ju3JquTnM8UvS9/8XFzEbqe79ePt9EFUAAAAZpqmmrOmcpjbExvzWHRuM1qz3vFG/19VdScBf1fFUzw3T+2f+z+gLKAigAAAAAAAAAAAAAAAAAAAKncq7dyZnjMz1lq2rp7FcxPCZj7tVQAAAAABasPV27FMzxppn7PR54ensYemJ4U0x9noigAAAAAAAAAAAAAAAAAAMZ7QV/S9j8HGTMbqu9Hz4/f/aEs2OwsYqxlumNsT6+yt3KJt1zFcZTGyYVNagAAzG/aDCRgbGsYqmnhnnP7Y3vHLOcojb6b8/o7+jMHqtrOvxVb/SOQJoCKAAAAAAAAAAAAAAAAAAxV4WnHY9GMgaTshHxeEpxVPe2TH/qN8ek80xjIFcv4G5Znw9qP1U7UVbcmKrdNfjpifnGZSKnmkWMHcvz3KZy5zshY6bVNHhpiPlEQ3KRz8FgKcNlM96rd2uXyTI3t8jIGkeLa3pq7W5liIy3AyAAAAAAAAAAAAAAAACDpHSEYaOzb21/aI5z7Ak38RRh6c71UR/uflDnXdMxE/k0Z+tWz7Q5Vy5NyvO5OczxlosSujOmLnCKek+7Hxi7yp6T7ueA6Hxi7yp6T7nxi7yp6T7ueA6Hxi7yp6T7nxi7yp6T7ueA6Hxi7yp6T7s/GLvKnpPu5wDr2tNbfzaPrTP8AE+7oYfFUYmPyqs5/TOyrorDNMzTOdM5THGNkkKto5mjdJfizFGI8XCrn6T6umigAAAAAAAAAAAAAPDG4jVcPNXHdEc6laqqmuqZqnOZ2zPq6GnL3axEUxupj/Kf6yc1cTQAAAAAAAAAAAGVh0ZitZw/f8VOyfXlKupuibv4WNjlV3Z+u775AsICKAAAAAAAAAAAArWkZ7WOr/dMdNiMtFWEt11TNVumZnbM5cWupWvLp6LUisizala8unoala8unoUisizala8unoala8unoUisizala8unoala8unoUisizala8unoala8unoUisizala8unoala8unoUisizala8unoala8unoUist7VXZu0zHCYn7rHqVry6ehqVry6ehSJEgIoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9k=",
        contact_unseen_messages : 0,
        contact_last_message_content : "Mensaje de prueba 2",
        contact_last_message_state : "", // NOT-SENDED | NOT-RECEIVED | RECEIVED | SEEN
        contact_last_message_date: new Date().toLocaleDateString(),
        messages: [
            {
                message_id : 1,
                message_content : "Mensaje de prueba",
                message_state : "", // NOT-SENDED | NOT-RECEIVED | RECEIVED | SEEN
                message_date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                send_by_me: false
            },
            {
                message_id : 2,
                message_content : "Mensaje de prueba 2",
                message_state : "", // NOT-SENDED | NOT-RECEIVED | RECEIVED | SEEN
                message_date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                send_by_me: false
            },
        ]
    },
    {
        contact_id : 6,
        contact_name : "Contacto 6",
        contact_avatar: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAHBhISBw4WEBITExAQFQ4RGBsPEBUOGBEXFhYSEx8YHSggGBomGxUXITEhJSkrLi4uGR8zODMtQygtMS4BCgoKDg0NDg0PDysZFRkrKystKys3KysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAYBAgUDB//EADQQAQABAgIHBgQGAwEAAAAAAAABAgMEEQUUITFBUZESIjJTYdEVcYGhEyNScsHhorHwQv/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFhEBAQEAAAAAAAAAAAAAAAAAABEB/9oADAMBAAIRAxEAPwD60AqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI+LxdGFp/MnbwpjfIJDEzlvV/EaTuXp7s9iOVO/rvQ6p7U97b6ztIVbInPcyqUbJ2JVjSFyzPi7Ucqtv8AZCrGImCx9OKjKO7V+mf45pYAAAAAAAAAAAAAAAAAAAAAAI+NxMYWxNU7Z3RHOVcu3Ju3JquTnM8UvS9/8XFzEbqe79ePt9EFUAAAAZpqmmrOmcpjbExvzWHRuM1qz3vFG/19VdScBf1fFUzw3T+2f+z+gLKAigAAAAAAAAAAAAAAAAAAAKncq7dyZnjMz1lq2rp7FcxPCZj7tVQAAAAABasPV27FMzxppn7PR54ensYemJ4U0x9noigAAAAAAAAAAAAAAAAAAMZ7QV/S9j8HGTMbqu9Hz4/f/aEs2OwsYqxlumNsT6+yt3KJt1zFcZTGyYVNagAAzG/aDCRgbGsYqmnhnnP7Y3vHLOcojb6b8/o7+jMHqtrOvxVb/SOQJoCKAAAAAAAAAAAAAAAAAAxV4WnHY9GMgaTshHxeEpxVPe2TH/qN8ek80xjIFcv4G5Znw9qP1U7UVbcmKrdNfjpifnGZSKnmkWMHcvz3KZy5zshY6bVNHhpiPlEQ3KRz8FgKcNlM96rd2uXyTI3t8jIGkeLa3pq7W5liIy3AyAAAAAAAAAAAAAAAACDpHSEYaOzb21/aI5z7Ak38RRh6c71UR/uflDnXdMxE/k0Z+tWz7Q5Vy5NyvO5OczxlosSujOmLnCKek+7Hxi7yp6T7ueA6Hxi7yp6T7nxi7yp6T7ueA6Hxi7yp6T7nxi7yp6T7ueA6Hxi7yp6T7s/GLvKnpPu5wDr2tNbfzaPrTP8AE+7oYfFUYmPyqs5/TOyrorDNMzTOdM5THGNkkKto5mjdJfizFGI8XCrn6T6umigAAAAAAAAAAAAAPDG4jVcPNXHdEc6laqqmuqZqnOZ2zPq6GnL3axEUxupj/Kf6yc1cTQAAAAAAAAAAAGVh0ZitZw/f8VOyfXlKupuibv4WNjlV3Z+u775AsICKAAAAAAAAAAAArWkZ7WOr/dMdNiMtFWEt11TNVumZnbM5cWupWvLp6LUisizala8unoala8unoUisizala8unoala8unoUisizala8unoala8unoUisizala8unoala8unoUisizala8unoala8unoUisizala8unoala8unoUist7VXZu0zHCYn7rHqVry6ehqVry6ehSJEgIoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9k=",
        contact_unseen_messages : 0,
        contact_last_message_content : "Mensaje de prueba 2",
        contact_last_message_state : "", // NOT-SENDED | NOT-RECEIVED | RECEIVED | SEEN
        contact_last_message_date: new Date().toLocaleDateString(),
        messages: [
            {
                message_id : 1,
                message_content : "Mensaje de prueba",
                message_state : "", // NOT-SENDED | NOT-RECEIVED | RECEIVED | SEEN
                message_date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                send_by_me: false
            },
            {
                message_id : 2,
                message_content : "Mensaje de prueba 2",
                message_state : "", // NOT-SENDED | NOT-RECEIVED | RECEIVED | SEEN
                message_date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                send_by_me: false
            },
        ]
    },
    {
        contact_id : 7,
        contact_name : "Contacto 7",
        contact_avatar: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAHBhISBw4WEBITExAQFQ4RGBsPEBUOGBEXFhYSEx8YHSggGBomGxUXITEhJSkrLi4uGR8zODMtQygtMS4BCgoKDg0NDg0PDysZFRkrKystKys3KysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAYBAgUDB//EADQQAQABAgIHBgQGAwEAAAAAAAABAgMEEQUUITFBUZESIjJTYdEVcYGhEyNScsHhorHwQv/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFhEBAQEAAAAAAAAAAAAAAAAAABEB/9oADAMBAAIRAxEAPwD60AqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI+LxdGFp/MnbwpjfIJDEzlvV/EaTuXp7s9iOVO/rvQ6p7U97b6ztIVbInPcyqUbJ2JVjSFyzPi7Ucqtv8AZCrGImCx9OKjKO7V+mf45pYAAAAAAAAAAAAAAAAAAAAAAI+NxMYWxNU7Z3RHOVcu3Ju3JquTnM8UvS9/8XFzEbqe79ePt9EFUAAAAZpqmmrOmcpjbExvzWHRuM1qz3vFG/19VdScBf1fFUzw3T+2f+z+gLKAigAAAAAAAAAAAAAAAAAAAKncq7dyZnjMz1lq2rp7FcxPCZj7tVQAAAAABasPV27FMzxppn7PR54ensYemJ4U0x9noigAAAAAAAAAAAAAAAAAAMZ7QV/S9j8HGTMbqu9Hz4/f/aEs2OwsYqxlumNsT6+yt3KJt1zFcZTGyYVNagAAzG/aDCRgbGsYqmnhnnP7Y3vHLOcojb6b8/o7+jMHqtrOvxVb/SOQJoCKAAAAAAAAAAAAAAAAAAxV4WnHY9GMgaTshHxeEpxVPe2TH/qN8ek80xjIFcv4G5Znw9qP1U7UVbcmKrdNfjpifnGZSKnmkWMHcvz3KZy5zshY6bVNHhpiPlEQ3KRz8FgKcNlM96rd2uXyTI3t8jIGkeLa3pq7W5liIy3AyAAAAAAAAAAAAAAAACDpHSEYaOzb21/aI5z7Ak38RRh6c71UR/uflDnXdMxE/k0Z+tWz7Q5Vy5NyvO5OczxlosSujOmLnCKek+7Hxi7yp6T7ueA6Hxi7yp6T7nxi7yp6T7ueA6Hxi7yp6T7nxi7yp6T7ueA6Hxi7yp6T7s/GLvKnpPu5wDr2tNbfzaPrTP8AE+7oYfFUYmPyqs5/TOyrorDNMzTOdM5THGNkkKto5mjdJfizFGI8XCrn6T6umigAAAAAAAAAAAAAPDG4jVcPNXHdEc6laqqmuqZqnOZ2zPq6GnL3axEUxupj/Kf6yc1cTQAAAAAAAAAAAGVh0ZitZw/f8VOyfXlKupuibv4WNjlV3Z+u775AsICKAAAAAAAAAAAArWkZ7WOr/dMdNiMtFWEt11TNVumZnbM5cWupWvLp6LUisizala8unoala8unoUisizala8unoala8unoUisizala8unoala8unoUisizala8unoala8unoUisizala8unoala8unoUisizala8unoala8unoUist7VXZu0zHCYn7rHqVry6ehqVry6ehSJEgIoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9k=",
        contact_unseen_messages : 0,
        contact_last_message_content : "Mensaje de prueba 2",
        contact_last_message_state : "", // NOT-SENDED | NOT-RECEIVED | RECEIVED | SEEN
        contact_last_message_date: new Date().toLocaleDateString(),
        messages: [
            {
                message_id : 1,
                message_content : "Mensaje de prueba",
                message_state : "", // NOT-SENDED | NOT-RECEIVED | RECEIVED | SEEN
                message_date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                send_by_me: false
            },
            {
                message_id : 2,
                message_content : "Mensaje de prueba 2",
                message_state : "", // NOT-SENDED | NOT-RECEIVED | RECEIVED | SEEN
                message_date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                send_by_me: false
            },
        ]
    },
    {
        contact_id : 8,
        contact_name : "Contacto 8",
        contact_avatar: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAHBhISBw4WEBITExAQFQ4RGBsPEBUOGBEXFhYSEx8YHSggGBomGxUXITEhJSkrLi4uGR8zODMtQygtMS4BCgoKDg0NDg0PDysZFRkrKystKys3KysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAYBAgUDB//EADQQAQABAgIHBgQGAwEAAAAAAAABAgMEEQUUITFBUZESIjJTYdEVcYGhEyNScsHhorHwQv/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFhEBAQEAAAAAAAAAAAAAAAAAABEB/9oADAMBAAIRAxEAPwD60AqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI+LxdGFp/MnbwpjfIJDEzlvV/EaTuXp7s9iOVO/rvQ6p7U97b6ztIVbInPcyqUbJ2JVjSFyzPi7Ucqtv8AZCrGImCx9OKjKO7V+mf45pYAAAAAAAAAAAAAAAAAAAAAAI+NxMYWxNU7Z3RHOVcu3Ju3JquTnM8UvS9/8XFzEbqe79ePt9EFUAAAAZpqmmrOmcpjbExvzWHRuM1qz3vFG/19VdScBf1fFUzw3T+2f+z+gLKAigAAAAAAAAAAAAAAAAAAAKncq7dyZnjMz1lq2rp7FcxPCZj7tVQAAAAABasPV27FMzxppn7PR54ensYemJ4U0x9noigAAAAAAAAAAAAAAAAAAMZ7QV/S9j8HGTMbqu9Hz4/f/aEs2OwsYqxlumNsT6+yt3KJt1zFcZTGyYVNagAAzG/aDCRgbGsYqmnhnnP7Y3vHLOcojb6b8/o7+jMHqtrOvxVb/SOQJoCKAAAAAAAAAAAAAAAAAAxV4WnHY9GMgaTshHxeEpxVPe2TH/qN8ek80xjIFcv4G5Znw9qP1U7UVbcmKrdNfjpifnGZSKnmkWMHcvz3KZy5zshY6bVNHhpiPlEQ3KRz8FgKcNlM96rd2uXyTI3t8jIGkeLa3pq7W5liIy3AyAAAAAAAAAAAAAAAACDpHSEYaOzb21/aI5z7Ak38RRh6c71UR/uflDnXdMxE/k0Z+tWz7Q5Vy5NyvO5OczxlosSujOmLnCKek+7Hxi7yp6T7ueA6Hxi7yp6T7nxi7yp6T7ueA6Hxi7yp6T7nxi7yp6T7ueA6Hxi7yp6T7s/GLvKnpPu5wDr2tNbfzaPrTP8AE+7oYfFUYmPyqs5/TOyrorDNMzTOdM5THGNkkKto5mjdJfizFGI8XCrn6T6umigAAAAAAAAAAAAAPDG4jVcPNXHdEc6laqqmuqZqnOZ2zPq6GnL3axEUxupj/Kf6yc1cTQAAAAAAAAAAAGVh0ZitZw/f8VOyfXlKupuibv4WNjlV3Z+u775AsICKAAAAAAAAAAAArWkZ7WOr/dMdNiMtFWEt11TNVumZnbM5cWupWvLp6LUisizala8unoala8unoUisizala8unoala8unoUisizala8unoala8unoUisizala8unoala8unoUisizala8unoala8unoUisizala8unoala8unoUist7VXZu0zHCYn7rHqVry6ehqVry6ehSJEgIoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9k=",
        contact_unseen_messages : 0,
        contact_last_message_content : "Mensaje de prueba 2",
        contact_last_message_state : "", // NOT-SENDED | NOT-RECEIVED | RECEIVED | SEEN
        contact_last_message_date: new Date().toLocaleDateString(),
        messages: [
            {
                message_id : 1,
                message_content : "Mensaje de prueba",
                message_state : "", // NOT-SENDED | NOT-RECEIVED | RECEIVED | SEEN
                message_date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                send_by_me: false
            },
            {
                message_id : 2,
                message_content : "Mensaje de prueba 2",
                message_state : "", // NOT-SENDED | NOT-RECEIVED | RECEIVED | SEEN
                message_date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                send_by_me: false
            },
        ]
    },
    {
        contact_id : 9,
        contact_name : "Contacto 9",
        contact_avatar: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAHBhISBw4WEBITExAQFQ4RGBsPEBUOGBEXFhYSEx8YHSggGBomGxUXITEhJSkrLi4uGR8zODMtQygtMS4BCgoKDg0NDg0PDysZFRkrKystKys3KysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAYBAgUDB//EADQQAQABAgIHBgQGAwEAAAAAAAABAgMEEQUUITFBUZESIjJTYdEVcYGhEyNScsHhorHwQv/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFhEBAQEAAAAAAAAAAAAAAAAAABEB/9oADAMBAAIRAxEAPwD60AqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI+LxdGFp/MnbwpjfIJDEzlvV/EaTuXp7s9iOVO/rvQ6p7U97b6ztIVbInPcyqUbJ2JVjSFyzPi7Ucqtv8AZCrGImCx9OKjKO7V+mf45pYAAAAAAAAAAAAAAAAAAAAAAI+NxMYWxNU7Z3RHOVcu3Ju3JquTnM8UvS9/8XFzEbqe79ePt9EFUAAAAZpqmmrOmcpjbExvzWHRuM1qz3vFG/19VdScBf1fFUzw3T+2f+z+gLKAigAAAAAAAAAAAAAAAAAAAKncq7dyZnjMz1lq2rp7FcxPCZj7tVQAAAAABasPV27FMzxppn7PR54ensYemJ4U0x9noigAAAAAAAAAAAAAAAAAAMZ7QV/S9j8HGTMbqu9Hz4/f/aEs2OwsYqxlumNsT6+yt3KJt1zFcZTGyYVNagAAzG/aDCRgbGsYqmnhnnP7Y3vHLOcojb6b8/o7+jMHqtrOvxVb/SOQJoCKAAAAAAAAAAAAAAAAAAxV4WnHY9GMgaTshHxeEpxVPe2TH/qN8ek80xjIFcv4G5Znw9qP1U7UVbcmKrdNfjpifnGZSKnmkWMHcvz3KZy5zshY6bVNHhpiPlEQ3KRz8FgKcNlM96rd2uXyTI3t8jIGkeLa3pq7W5liIy3AyAAAAAAAAAAAAAAAACDpHSEYaOzb21/aI5z7Ak38RRh6c71UR/uflDnXdMxE/k0Z+tWz7Q5Vy5NyvO5OczxlosSujOmLnCKek+7Hxi7yp6T7ueA6Hxi7yp6T7nxi7yp6T7ueA6Hxi7yp6T7nxi7yp6T7ueA6Hxi7yp6T7s/GLvKnpPu5wDr2tNbfzaPrTP8AE+7oYfFUYmPyqs5/TOyrorDNMzTOdM5THGNkkKto5mjdJfizFGI8XCrn6T6umigAAAAAAAAAAAAAPDG4jVcPNXHdEc6laqqmuqZqnOZ2zPq6GnL3axEUxupj/Kf6yc1cTQAAAAAAAAAAAGVh0ZitZw/f8VOyfXlKupuibv4WNjlV3Z+u775AsICKAAAAAAAAAAAArWkZ7WOr/dMdNiMtFWEt11TNVumZnbM5cWupWvLp6LUisizala8unoala8unoUisizala8unoala8unoUisizala8unoala8unoUisizala8unoala8unoUisizala8unoala8unoUisizala8unoala8unoUist7VXZu0zHCYn7rHqVry6ehqVry6ehSJEgIoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9k=",
        contact_unseen_messages : 0,
        contact_last_message_content : "Mensaje de prueba 2",
        contact_last_message_state : "", // NOT-SENDED | NOT-RECEIVED | RECEIVED | SEEN
        contact_last_message_date: new Date().toLocaleDateString(),
        messages: [
            {
                message_id : 1,
                message_content : "Mensaje de prueba",
                message_state : "", // NOT-SENDED | NOT-RECEIVED | RECEIVED | SEEN
                message_date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                send_by_me: false
            },
            {
                message_id : 2,
                message_content : "Mensaje de prueba 2",
                message_state : "", // NOT-SENDED | NOT-RECEIVED | RECEIVED | SEEN
                message_date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                send_by_me: false
            },
        ]
    },
    {
        contact_id : 10,
        contact_name : "Contacto 10",
        contact_avatar: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAHBhISBw4WEBITExAQFQ4RGBsPEBUOGBEXFhYSEx8YHSggGBomGxUXITEhJSkrLi4uGR8zODMtQygtMS4BCgoKDg0NDg0PDysZFRkrKystKys3KysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAYBAgUDB//EADQQAQABAgIHBgQGAwEAAAAAAAABAgMEEQUUITFBUZESIjJTYdEVcYGhEyNScsHhorHwQv/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFhEBAQEAAAAAAAAAAAAAAAAAABEB/9oADAMBAAIRAxEAPwD60AqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI+LxdGFp/MnbwpjfIJDEzlvV/EaTuXp7s9iOVO/rvQ6p7U97b6ztIVbInPcyqUbJ2JVjSFyzPi7Ucqtv8AZCrGImCx9OKjKO7V+mf45pYAAAAAAAAAAAAAAAAAAAAAAI+NxMYWxNU7Z3RHOVcu3Ju3JquTnM8UvS9/8XFzEbqe79ePt9EFUAAAAZpqmmrOmcpjbExvzWHRuM1qz3vFG/19VdScBf1fFUzw3T+2f+z+gLKAigAAAAAAAAAAAAAAAAAAAKncq7dyZnjMz1lq2rp7FcxPCZj7tVQAAAAABasPV27FMzxppn7PR54ensYemJ4U0x9noigAAAAAAAAAAAAAAAAAAMZ7QV/S9j8HGTMbqu9Hz4/f/aEs2OwsYqxlumNsT6+yt3KJt1zFcZTGyYVNagAAzG/aDCRgbGsYqmnhnnP7Y3vHLOcojb6b8/o7+jMHqtrOvxVb/SOQJoCKAAAAAAAAAAAAAAAAAAxV4WnHY9GMgaTshHxeEpxVPe2TH/qN8ek80xjIFcv4G5Znw9qP1U7UVbcmKrdNfjpifnGZSKnmkWMHcvz3KZy5zshY6bVNHhpiPlEQ3KRz8FgKcNlM96rd2uXyTI3t8jIGkeLa3pq7W5liIy3AyAAAAAAAAAAAAAAAACDpHSEYaOzb21/aI5z7Ak38RRh6c71UR/uflDnXdMxE/k0Z+tWz7Q5Vy5NyvO5OczxlosSujOmLnCKek+7Hxi7yp6T7ueA6Hxi7yp6T7nxi7yp6T7ueA6Hxi7yp6T7nxi7yp6T7ueA6Hxi7yp6T7s/GLvKnpPu5wDr2tNbfzaPrTP8AE+7oYfFUYmPyqs5/TOyrorDNMzTOdM5THGNkkKto5mjdJfizFGI8XCrn6T6umigAAAAAAAAAAAAAPDG4jVcPNXHdEc6laqqmuqZqnOZ2zPq6GnL3axEUxupj/Kf6yc1cTQAAAAAAAAAAAGVh0ZitZw/f8VOyfXlKupuibv4WNjlV3Z+u775AsICKAAAAAAAAAAAArWkZ7WOr/dMdNiMtFWEt11TNVumZnbM5cWupWvLp6LUisizala8unoala8unoUisizala8unoala8unoUisizala8unoala8unoUisizala8unoala8unoUisizala8unoala8unoUisizala8unoala8unoUist7VXZu0zHCYn7rHqVry6ehqVry6ehSJEgIoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9k=",
        contact_unseen_messages : 0,
        contact_last_message_content : "Mensaje de prueba 2",
        contact_last_message_state : "", // NOT-SENDED | NOT-RECEIVED | RECEIVED | SEEN
        contact_last_message_date: new Date().toLocaleDateString(),
        messages: [
            {
                message_id : 1,
                message_content : "Mensaje de prueba",
                message_state : "", // NOT-SENDED | NOT-RECEIVED | RECEIVED | SEEN
                message_date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                send_by_me: false
            },
            {
                message_id : 2,
                message_content : "Mensaje de prueba 2",
                message_state : "", // NOT-SENDED | NOT-RECEIVED | RECEIVED | SEEN
                message_date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                send_by_me: false
            },
        ]
    },
    
]

export default contact_data;