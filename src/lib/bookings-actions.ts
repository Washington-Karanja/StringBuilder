"use server";

import { createServerSupabaseClient, isSupabaseConfigured } from "@/lib/supabase/server";

export async function submitContact(formData: FormData) {
  if (!isSupabaseConfigured()) {
    return { error: "Supabase is not configured. Please set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env.local" };
  }

  try {
    const supabase = createServerSupabaseClient();

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const subject = String(formData.get("subject") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !message) {
      return { error: "Please fill in all required fields." };
    }

    const { error } = await supabase.from("bookings").insert({
      name,
      email,
      phone: phone || null,
      subject: subject || null,
      message,
      type: "Contact Form",
      status: "Pending",
      date: new Date().toISOString().split("T")[0],
      time: new Date().toISOString().slice(0, 16),
    });

    if (error) {
      return { error: `Database error: ${error.message}` };
    }

    return { success: true };
  } catch (err) {
    return { error: err instanceof Error ? err.message : "Something went wrong. Please try again." };
  }
}

export async function submitBooking(formData: FormData) {
  if (!isSupabaseConfigured()) {
    return { error: "Supabase is not configured. Please set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env.local" };
  }

  try {
    const supabase = createServerSupabaseClient();

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const notes = String(formData.get("notes") || "").trim();
    const consultationType = String(formData.get("consultationType") || "").trim();
    const date = String(formData.get("date") || "").trim();
    const time = String(formData.get("time") || "").trim();

    if (!name || !email || !consultationType || !date || !time) {
      return { error: "Please fill in all required fields." };
    }

    const { error } = await supabase.from("bookings").insert({
      name,
      email,
      phone: phone || null,
      message: notes || null,
      type: consultationType,
      status: "Pending",
      date,
      time,
    });

    if (error) {
      return { error: `Database error: ${error.message}` };
    }

    return { success: true };
  } catch (err) {
    return { error: err instanceof Error ? err.message : "Something went wrong. Please try again." };
  }
}

export async function getBookings() {
  if (!isSupabaseConfigured()) {
    return [];
  }

  try {
    const supabase = createServerSupabaseClient();

    const { data, error } = await supabase
      .from("bookings")
      .select("*")
      .order("created_at", { ascending: false });

    if (error || !data) {
      return [];
    }

    return data.map((booking) => ({
      id: booking.id,
      name: booking.name,
      type: booking.type,
      when: `${booking.date} · ${booking.time}`,
      status: booking.status,
    }));
  } catch {
    return [];
  }
}

export async function updateBookingStatus(id: number, status: string) {
  if (!isSupabaseConfigured()) {
    return { error: "Supabase is not configured." };
  }

  try {
    const supabase = createServerSupabaseClient();

    const { error } = await supabase
      .from("bookings")
      .update({ status })
      .eq("id", id);

    if (error) {
      return { error: error.message };
    }

    return { success: true };
  } catch (err) {
    return { error: err instanceof Error ? err.message : "Something went wrong." };
  }
}
