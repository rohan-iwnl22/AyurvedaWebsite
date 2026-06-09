import { useState } from "react";
import DatePicker from "react-datepicker";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import styles from "./BookingForm.module.css";
import "react-datepicker/dist/react-datepicker.css";

const DOCTORS = [
  {
    id: "sharma",
    name: "Dr Kiran M. Ingle",
    spec: "BAMS, MD, PHD SCHOLAR",
    desc: "MD Ayurveda Specialist | Ex-Registrar, KEM Hospital Mumbai | 10 Years of Clinical Excellence in Integrative Ayurvedic Medicine.",
    avatar:
      "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/dr%20kiran%20ingle.jpg",
  },
  {
    id: "patel",
    name: "Dr Pooja K. Ingle",
    spec: "BAMS, MPH( NUTRITION)",
    desc: "Nutrition & Panchakarma Specialist | 5 Years of Transforming Health Through Ayurvedic Detox & Therapeutic Diet Planning",
    avatar:
      "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/dr%20pooja%20ingle.jpg",
  },
];

const TIME_SLOTS = [
  "09:00 AM",
  "10:00 AM",
  "11:30 AM",
  "02:00 PM",
  "03:30 PM",
  "05:00 PM",
];

const BRANCHES = [{ id: "Akola", name: "Akola Branch" }];

export default function BookingForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    doctorId: "",
    date: new Date(),
    timeSlot: "",
    name: "",
    email: "",
    phone: "",
    branch: "",
  });

  const selectedDoctorObj = DOCTORS.find((doc) => doc.id === formData.doctorId);
  const selectedBranchObj = BRANCHES.find((b) => b.id === formData.branch);

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const updateField = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const isStepValid = () => {
    if (step === 1) return formData.doctorId !== "";
    if (step === 2) return formData.date !== null && formData.timeSlot !== "";
    if (step === 3) {
      return (
        formData.name.trim() !== "" &&
        formData.email.trim() !== "" &&
        formData.phone.trim() !== "" &&
        formData.branch !== ""
      );
    }
    return true;
  };

  const getProgressPercentage = () => {
    if (step === 1) return "0%";
    if (step === 2) return "33%";
    if (step === 3) return "66%";
    return "100%";
  };

  return (
    <section id="booking" className={`${styles.bookingSection} section`}>
      <div className={`${styles.bookingContainer}`}>
        <div className={styles.headerArea}>
          <span className={styles.accentHeading}>Appointment Portal</span>
          <h2 className={styles.title}>Book Treatment</h2>
          <p className={styles.description}>
            Schedule an online consultation or booking at any of our branches.
            Fast, secure, and authenticated setup.
          </p>
        </div>

        {/* Progress Tracker */}
        <div className={styles.progressBar}>
          <div
            className={styles.progressActiveBar}
            style={{ width: getProgressPercentage() }}
          ></div>
          <div
            className={`${styles.progressStep} ${step >= 1 ? styles.stepActive : ""} ${
              step > 1 ? styles.stepDone : ""
            }`}
          >
            <div className={styles.stepNumber}>1</div>
            <div className={styles.stepLabel}>Select Doctor</div>
          </div>
          <div
            className={`${styles.progressStep} ${step >= 2 ? styles.stepActive : ""} ${
              step > 2 ? styles.stepDone : ""
            }`}
          >
            <div className={styles.stepNumber}>2</div>
            <div className={styles.stepLabel}>Schedule</div>
          </div>
          <div
            className={`${styles.progressStep} ${step >= 3 ? styles.stepActive : ""} ${
              step > 3 ? styles.stepDone : ""
            }`}
          >
            <div className={styles.stepNumber}>3</div>
            <div className={styles.stepLabel}>Patient Details</div>
          </div>
          <div
            className={`${styles.progressStep} ${step >= 4 ? styles.stepActive : ""} ${
              step > 4 ? styles.stepDone : ""
            }`}
          >
            <div className={styles.stepNumber}>4</div>
            <div className={styles.stepLabel}>Confirmation</div>
          </div>
        </div>

        {/* Multi-step Form Window */}
        <div className={styles.formWindow}>
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className={styles.stepTitle}>
                  Select Your Ayurvedic Doctor
                </h3>
                <div className={styles.doctorGrid}>
                  {DOCTORS.map((doc) => (
                    <div
                      key={doc.id}
                      className={`${styles.doctorCard} ${
                        formData.doctorId === doc.id
                          ? styles.doctorSelected
                          : ""
                      }`}
                      onClick={() => updateField("doctorId", doc.id)}
                    >
                      <div className={styles.doctorAvatarWrapper}>
                        <div className={styles.doctorAvatar}>
                          <img
                            src={doc.avatar}
                            alt={doc.name}
                            className={styles.doctorImage}
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src =
                                "https://via.placeholder.com/100x100?text=Doctor";
                            }}
                          />
                        </div>
                        {formData.doctorId === doc.id && (
                          <div className={styles.selectedOverlay}>
                            <FaCheckCircle size={28} color="#4caf50" />
                          </div>
                        )}
                      </div>
                      <div className={styles.doctorName}>{doc.name}</div>
                      <div className={styles.doctorSpec}>{doc.spec}</div>
                      <div className={styles.doctorDesc}>{doc.desc}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className={styles.stepTitle}>Select Date & Time</h3>
                <div className={styles.scheduleLayout}>
                  <div className={styles.calendarWrapper}>
                    <label className={styles.datepickerLabel}>
                      Choose Date
                    </label>
                    <DatePicker
                      selected={formData.date}
                      onChange={(d) => updateField("date", d)}
                      minDate={new Date()}
                      inline
                    />
                  </div>
                  <div className={styles.slotsWrapper}>
                    <label className={styles.slotsTitle}>Available Slots</label>
                    <div className={styles.slotsGrid}>
                      {TIME_SLOTS.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          className={`${styles.slotBtn} ${
                            formData.timeSlot === slot
                              ? styles.slotSelected
                              : ""
                          }`}
                          onClick={() => updateField("timeSlot", slot)}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className={styles.stepTitle}>Enter Your Details</h3>
                <div className={styles.detailsForm}>
                  <div className={styles.formGroup}>
                    <label htmlFor="p_name">Full Name</label>
                    <input
                      id="p_name"
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => updateField("name", e.target.value)}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="p_email">Email Address</label>
                    <input
                      id="p_email"
                      type="email"
                      placeholder="e.g. rahul@example.com"
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="p_phone">Phone Number</label>
                    <input
                      id="p_phone"
                      type="tel"
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="p_branch">Preferred Branch</label>
                    <select
                      id="p_branch"
                      value={formData.branch}
                      onChange={(e) => updateField("branch", e.target.value)}
                    >
                      <option value="">-- Select Branch --</option>
                      {BRANCHES.map((b) => (
                        <option key={b.id} value={b.id}>
                          {b.name} Branch
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className={styles.successBlock}
              >
                <FaCheckCircle className={styles.successIcon} size={64} />
                <h3 className={styles.successTitle}>Booking Successful!</h3>
                <p className={styles.successText}>
                  Your appointment has been registered. A confirmation text and
                  email have been dispatched with details.
                </p>

                <div className={styles.summaryCard}>
                  <div className={styles.summaryRow}>
                    <span className={styles.summaryLabel}>Patient:</span>
                    <span className={styles.summaryVal}>{formData.name}</span>
                  </div>
                  <div className={styles.summaryRow}>
                    <span className={styles.summaryLabel}>Doctor:</span>
                    <span className={styles.summaryVal}>
                      {selectedDoctorObj?.name}
                    </span>
                  </div>
                  <div className={styles.summaryRow}>
                    <span className={styles.summaryLabel}>Branch:</span>
                    <span className={styles.summaryVal}>
                      {selectedBranchObj?.name} Branch
                    </span>
                  </div>
                  <div className={styles.summaryRow}>
                    <span className={styles.summaryLabel}>Date:</span>
                    <span className={styles.summaryVal}>
                      {formData.date.toLocaleDateString("en-IN", {
                        weekday: "short",
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <div className={styles.summaryRow}>
                    <span className={styles.summaryLabel}>Time:</span>
                    <span className={styles.summaryVal}>
                      {formData.timeSlot}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    setStep(1);
                    setFormData({
                      doctorId: "",
                      date: new Date(),
                      timeSlot: "",
                      name: "",
                      email: "",
                      phone: "",
                      branch: "",
                    });
                  }}
                >
                  Book Another Appointment
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Controls */}
          {step < 4 && (
            <div className={styles.formControls}>
              {step > 1 && (
                <button
                  type="button"
                  className={styles.backBtn}
                  onClick={handleBack}
                >
                  Back
                </button>
              )}
              <button
                type="button"
                className={styles.nextBtn}
                onClick={handleNext}
                disabled={!isStepValid()}
              >
                {step === 3 ? "Confirm Booking" : "Continue"}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
