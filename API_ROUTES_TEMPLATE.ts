/**
 * API ROUTE TEMPLATE: GET /api/freelancer/[id]
 * Place this file at: app/api/freelancer/[id]/route.ts
 * 
 * Fetches a freelancer's profile by user ID
 */

import { NextRequest, NextResponse } from 'next/server';
import { getFreelancerProfile } from '@/app/api-freelancer-reference';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json(
        { error: 'Freelancer ID is required' },
        { status: 400 }
      );
    }

    const profile = await getFreelancerProfile(id);

    if (!profile) {
      return NextResponse.json(
        { error: 'Freelancer not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(profile);
  } catch (error) {
    console.error('Error fetching freelancer:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * API ROUTE TEMPLATE: PUT /api/freelancer/[id]
 * Place this file at: app/api/freelancer/[id]/route.ts
 * 
 * Updates a freelancer's profile
 * Requires authentication
 */

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // TODO: Add authentication check
    // const token = request.headers.get('authorization')?.split('Bearer ')[1];
    // const decoded = verifyToken(token);
    // if (!decoded || decoded.userId !== id) {
    //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    // }

    const { id } = await params;
    const body = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.bio) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const { updateFreelancerProfile } = await import(
      '@/app/api-freelancer-reference'
    );
    const updated = await updateFreelancerProfile(id, body);

    if (!updated) {
      return NextResponse.json(
        { error: 'Failed to update profile' },
        { status: 500 }
      );
    }

    return NextResponse.json(updated);
  } catch (error) {
    console.error('Error updating freelancer:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * API ROUTE TEMPLATE: GET /api/freelancer/list
 * Place this file at: app/api/freelancer/list/route.ts
 * 
 * Lists freelancers with pagination
 */

export async function getFreelancerList(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');

    if (page < 1 || limit < 1 || limit > 100) {
      return NextResponse.json(
        { error: 'Invalid pagination parameters' },
        { status: 400 }
      );
    }

    const { listFreelancers } = await import(
      '@/app/api-freelancer-reference'
    );
    const result = await listFreelancers(page, limit);

    return NextResponse.json({
      profiles: result.profiles,
      pagination: {
        page,
        limit,
        total: result.total,
        pages: Math.ceil(result.total / limit),
      },
    });
  } catch (error) {
    console.error('Error listing freelancers:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * API ROUTE TEMPLATE: GET /api/freelancer/search
 * Place this file at: app/api/freelancer/search/route.ts
 * 
 * Search freelancers by skills
 */

export async function searchFreelancers(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const skillsParam = searchParams.get('skills');

    if (!skillsParam) {
      return NextResponse.json(
        { error: 'Skills parameter is required' },
        { status: 400 }
      );
    }

    const skills = skillsParam.split(',').map((s) => s.trim());
    const limit = parseInt(searchParams.get('limit') || '10');

    if (limit < 1 || limit > 100) {
      return NextResponse.json(
        { error: 'Invalid limit parameter' },
        { status: 400 }
      );
    }

    const { searchFreelancersBySkills } = await import(
      '@/app/api-freelancer-reference'
    );
    const profiles = await searchFreelancersBySkills(skills, limit);

    return NextResponse.json({ profiles });
  } catch (error) {
    console.error('Error searching freelancers:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * API ROUTE TEMPLATE: POST /api/freelancer/[id]/skills
 * Place this file at: app/api/freelancer/[id]/skills/route.ts
 * 
 * Add a skill to freelancer profile
 * Requires authentication
 */

export async function addSkill(request: NextRequest) {
  try {
    // TODO: Add authentication check
    const body = await request.json();

    if (!body.skill) {
      return NextResponse.json(
        { error: 'Skill is required' },
        { status: 400 }
      );
    }

    const { id } = request.nextUrl.pathname.split('/')[3];
    const { addSkillToProfile } = await import(
      '@/app/api-freelancer-reference'
    );
    const updated = await addSkillToProfile(id, body.skill.trim());

    return NextResponse.json(updated);
  } catch (error) {
    console.error('Error adding skill:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * API ROUTE TEMPLATE: DELETE /api/freelancer/[id]/skills
 * Place this file at: app/api/freelancer/[id]/skills/route.ts
 * 
 * Remove a skill from freelancer profile
 * Requires authentication
 */

export async function removeSkill(request: NextRequest) {
  try {
    // TODO: Add authentication check
    const body = await request.json();

    if (!body.skill) {
      return NextResponse.json(
        { error: 'Skill is required' },
        { status: 400 }
      );
    }

    const { id } = request.nextUrl.pathname.split('/')[3];
    const { removeSkillFromProfile } = await import(
      '@/app/api-freelancer-reference'
    );
    const updated = await removeSkillFromProfile(id, body.skill.trim());

    return NextResponse.json(updated);
  } catch (error) {
    console.error('Error removing skill:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
