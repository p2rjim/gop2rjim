-- Create storage bucket for portfolio images
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'portfolio',
  'portfolio',
  true,
  10485760, -- 10MB
  ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif']
)
ON CONFLICT (id) DO UPDATE SET
  public = true,
  file_size_limit = 10485760,
  allowed_mime_types = ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif'];

-- Storage policies
DROP POLICY IF EXISTS "Public read access" ON storage.objects;
CREATE POLICY "Public read access"
ON storage.objects FOR SELECT
USING (bucket_id = 'portfolio');

DROP POLICY IF EXISTS "Allow public uploads" ON storage.objects;
CREATE POLICY "Allow public uploads"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'portfolio');

DROP POLICY IF EXISTS "Allow public updates" ON storage.objects;
CREATE POLICY "Allow public updates"
ON storage.objects FOR UPDATE
USING (bucket_id = 'portfolio');

DROP POLICY IF EXISTS "Allow public deletes" ON storage.objects;
CREATE POLICY "Allow public deletes"
ON storage.objects FOR DELETE
USING (bucket_id = 'portfolio');
