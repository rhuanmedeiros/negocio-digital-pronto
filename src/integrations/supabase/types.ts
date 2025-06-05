export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      business_photos: {
        Row: {
          description: string | null
          file_name: string
          file_path: string
          file_size: number | null
          form_submission_id: string | null
          id: string
          mime_type: string | null
          photo_type: string | null
          uploaded_at: string
        }
        Insert: {
          description?: string | null
          file_name: string
          file_path: string
          file_size?: number | null
          form_submission_id?: string | null
          id?: string
          mime_type?: string | null
          photo_type?: string | null
          uploaded_at?: string
        }
        Update: {
          description?: string | null
          file_name?: string
          file_path?: string
          file_size?: number | null
          form_submission_id?: string | null
          id?: string
          mime_type?: string | null
          photo_type?: string | null
          uploaded_at?: string
        }
        Relationships: []
      }
      form_submissions: {
        Row: {
          activity_area: string
          additional_message: string | null
          address: string | null
          business_name: string
          cep: string | null
          city: string | null
          complement: string | null
          created_at: string
          detailed_description: string | null
          end_time: string | null
          facebook: string | null
          id: string
          instagram: string | null
          keywords: string | null
          neighborhood: string | null
          number: string | null
          online_scheduling: string | null
          optional_email: string | null
          other_social: string | null
          primary_email: string
          primary_phone: string
          registration_type: string
          responsible_name: string
          schedule_notes: string | null
          scheduling_platform: string | null
          service_areas: string | null
          short_description: string
          start_time: string | null
          state: string | null
          updated_at: string
          whatsapp: string | null
          working_days: string[] | null
        }
        Insert: {
          activity_area: string
          additional_message?: string | null
          address?: string | null
          business_name: string
          cep?: string | null
          city?: string | null
          complement?: string | null
          created_at?: string
          detailed_description?: string | null
          end_time?: string | null
          facebook?: string | null
          id?: string
          instagram?: string | null
          keywords?: string | null
          neighborhood?: string | null
          number?: string | null
          online_scheduling?: string | null
          optional_email?: string | null
          other_social?: string | null
          primary_email: string
          primary_phone: string
          registration_type: string
          responsible_name: string
          schedule_notes?: string | null
          scheduling_platform?: string | null
          service_areas?: string | null
          short_description: string
          start_time?: string | null
          state?: string | null
          updated_at?: string
          whatsapp?: string | null
          working_days?: string[] | null
        }
        Update: {
          activity_area?: string
          additional_message?: string | null
          address?: string | null
          business_name?: string
          cep?: string | null
          city?: string | null
          complement?: string | null
          created_at?: string
          detailed_description?: string | null
          end_time?: string | null
          facebook?: string | null
          id?: string
          instagram?: string | null
          keywords?: string | null
          neighborhood?: string | null
          number?: string | null
          online_scheduling?: string | null
          optional_email?: string | null
          other_social?: string | null
          primary_email?: string
          primary_phone?: string
          registration_type?: string
          responsible_name?: string
          schedule_notes?: string | null
          scheduling_platform?: string | null
          service_areas?: string | null
          short_description?: string
          start_time?: string | null
          state?: string | null
          updated_at?: string
          whatsapp?: string | null
          working_days?: string[] | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
