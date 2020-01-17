
export const getFilteredContacts = (contacts, text) => {
  const contactsSearch = text.toLowerCase();

  return contacts.filter(contact => {
    const { first, last, title } = contact.name;


    return (
      first.toLowerCase().includes(contactsSearch) ||
      last.toLowerCase().includes(contactsSearch) ||
      title.includes(contactsSearch)  
    );
  });
};
