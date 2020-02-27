import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Today from '../components/Today';

export default function Home() {
  const [habits, setHabits] = useState([]);

  async function fetchHabits() {
    let response;

    try {
      response = await axios.get('/api/habits');
    } catch (e) {
      console.log(e);
    }
    let { data } = response;

    setHabits(data);
  }

  useEffect(() => {
    fetchHabits();
  }, []);

  async function addHabit(newHabit, event) {
    event.preventDefault();

    const response = await axios.post('/api/habits/', newHabit);

    setHabits([...habits, response.data]);
  }

  return (
    <div>
      <Today habits={habits} addHabit={addHabit}></Today>
    </div>
  );
}
