import Accordian from "./Accordian";

const faqs = [
  {
    title: "Find a Quiet Space",
    text: "Choose a calm and quiet place where you won't be disturbed. This could be a corner of your room, a serene outdoor spot, or any place that allows you to focus without distractions.",
  },
  {
    title: "Comfortable Seating",
    text: "Sit or lie down in a comfortable position that supports relaxation. Use cushions or a meditation pillow if needed. Maintain an upright posture to stay alert and prevent drowsiness.",
  },
  {
    title: "Focus on Your Breath",
    text: "Bring your attention to your breath. Observe the natural rhythm of your inhales and exhales. This simple focus helps anchor your mind and brings you to the present moment.",
  },
  {
    title: "Gentle Mindfulness",
    text: "Practice mindfulness by gently acknowledging your thoughts, feelings, and sensations. Instead of fighting or analyzing them, observe them with curiosity and let them pass without judgment.",
  },
  {
    title: "Start Small and Consistent",
    text: "Begin with a short meditation time, like 5-10 minutes, and gradually increase it as you become more comfortable. Consistency is key, so try to meditate at the same time each day to establish a routine.",
  },
];

const Meditation = () => {
  return (
    <div>
      <Accordian data={faqs} />
    </div>
  );
};

export default Meditation;
